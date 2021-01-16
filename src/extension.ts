// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { FIX40_FIELDS } from './fix40';
import { FIX41_FIELDS } from './fix41';
import { FIX42_FIELDS } from './fix42';
import { FIX43_FIELDS } from './fix43';
import { FIX44_FIELDS } from './fix44';
import { FIX50SP2_FIELDS } from './fix50sp2';
import { FIX50SP1_FIELDS } from './fix50sp1';

const SOH = '\u0001';

interface FixEnums{
	[ value: string ] : string;
}

interface FieldMap {
	[ index: string ] : {
		name: string;
		type: string;
		enums?: FixEnums;
	}
}

interface FixFields {
	version: string;
	fields: FieldMap;
}

const FIX_FIELDS_BY_VERSION: { [versin:string]: FixFields } = {
	'FIX.4.0' : FIX40_FIELDS,
	'FIX.4.1' : FIX41_FIELDS,
	'FIX.4.2' : FIX42_FIELDS,
	'FIX.4.3' : FIX43_FIELDS,
	'FIX.4.4' : FIX44_FIELDS,
	'FIXT.1.1' : FIX50SP2_FIELDS,
	'' : FIX50SP2_FIELDS
};

function tokenizeField(doc: vscode.TextDocument, pos: vscode.Position): [string,string]{
	let line = doc.lineAt(pos.line).text;
	const col = pos.character;
	let c = line.charAt( col );
	if( c === SOH ) {
		return ['|',''];
	}

	let first = col;
	while( true ){
		c = line.charAt( first );
		if( c === SOH ){
			++first;
			break;
		}
		if( first === 0 ){
			break;
		}
		--first;
	}
	
	let last = first;
	let eq = -1;

	while( last <= line.length ){
		c = line.charAt( last );
		if( c === SOH ){
			break;
		}
		if( eq < 0 && c === '=' ){
			eq = last;
		}
		++last;
	}
	
	let key: string = '';
	let value: string = '';
	if( eq > first ){
		key = line.substring( first, eq );
	}
	if( last > eq+1 ){
		value = line.substring( eq+1, last );
	}
	return [key,value];
}

function getFixVersion( line: string ) : string {
	let pos = line.indexOf( "8=FIX" );
	if( pos >= 0 ){
		let sohPos = line.indexOf( SOH, pos+5 );
		return line.substring( pos + 2, sohPos );
	}
	return '';
}

export function activate(context: vscode.ExtensionContext) {

	/*
	vscode.languages.registerColorProvider( 'fix', {
		
		provideDocumentColors(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.ColorInformation[]>{
			return null;
		}
		
		provideColorPresentations( color: vscode.Color, context: { document: vscode.TextDocument, range: vscode.Range }, token: vscode.CancellationToken): vscode.ProviderResult<vscode.ColorPresentation[]>
		{
			return undefined;
		}
		
	} );
	*/

	vscode.languages.registerHoverProvider( 'fix', { provideHover(document,position,token){
		let [key,value] = tokenizeField(document,position);
		if( key && key.length > 0 )
		{
			let version = getFixVersion( document.lineAt(position.line).text );
			let dico = FIX_FIELDS_BY_VERSION[ version ];
			if( ! dico ) {
				dico = FIX50SP2_FIELDS;
			}
			let fieldMap: FieldMap = dico.fields;
			let field = fieldMap[key];
			let enumDesc = '';
			if( field ){
				key = field.name;
				if( field.enums ){
					enumDesc = (<FixEnums>field.enums)[ value ];
					if( ! enumDesc ){
						enumDesc = ' unkown(' + value + ')';
					}
					else {
						enumDesc = ' ' + enumDesc;
					}
				}
			}
			let tooltip = new vscode.MarkdownString();
			tooltip.appendMarkdown( '**' + key + '**' + enumDesc );
			return new vscode.Hover( tooltip );			
		}
		else {
			return null;
		}
	} } );
}

export function deactivate() {}
