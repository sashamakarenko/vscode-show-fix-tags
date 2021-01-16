export const FIX43_FIELDS = {
  version : '4.3',
  fields : {
    '1' : { name: 'Account', type: 'string' },
    '2' : { name: 'AdvId', type: 'string' },
    '3' : { name: 'AdvRefID', type: 'string' },
    '4' : { name: 'AdvSide', type: 'char',
            enums: {
              'B' : 'BUY',
              'S' : 'SELL',
              'X' : 'CROSS',
              'T' : 'TRADE'
            }
          },
    '5' : { name: 'AdvTransType', type: 'string',
            enums: {
              'N' : 'NEW',
              'C' : 'CANCEL',
              'R' : 'REPLACE'
            }
          },
    '6' : { name: 'AvgPx', type: 'price' },
    '7' : { name: 'BeginSeqNo', type: 'seqnum' },
    '8' : { name: 'BeginString', type: 'string' },
    '9' : { name: 'BodyLength', type: 'length' },
   '10' : { name: 'CheckSum', type: 'string' },
   '11' : { name: 'ClOrdID', type: 'string' },
   '12' : { name: 'Commission', type: 'amt' },
   '13' : { name: 'CommType', type: 'char',
            enums: {
              '6' : 'PER_BOND',
              '1' : 'PER_SHARE',
              '2' : 'PERCENTAGE',
              '3' : 'ABSOLUTE',
              '5' : '5',
              '4' : '4'
            }
          },
   '14' : { name: 'CumQty', type: 'qty' },
   '15' : { name: 'Currency', type: 'currency' },
   '16' : { name: 'EndSeqNo', type: 'seqnum' },
   '17' : { name: 'ExecID', type: 'string' },
   '18' : { name: 'ExecInst', type: 'multiplevaluestring',
            enums: {
              'Y' : 'TRYTOSTOP',
              'M' : 'MIDPRCPEG',
              'P' : 'MARKPEG',
              'Q' : 'CANCELONSYSFAIL',
              'R' : 'PRIMPEG',
              'S' : 'SUSPEND',
              'U' : 'CUSTDISPINST',
              'V' : 'NETTING',
              'W' : 'PEGVWAP',
              'X' : 'TRADEALONG',
              'D' : 'PERCVOL',
              '0' : 'STAYOFFER',
              '2' : 'WORK',
              '4' : 'OVERDAY',
              '5' : 'HELD',
              '6' : 'PARTNOTINIT',
              '7' : 'STRICTSCALE',
              '8' : 'TRYTOSCALE',
              '9' : 'STAYBID',
              'A' : 'NOCROSS',
              'O' : 'OPENPEG',
              'C' : 'CALLFIRST',
              'N' : 'NONNEGO',
              'E' : 'DNI',
              'F' : 'DNR',
              'G' : 'AON',
              'H' : 'RESTATEONSYSFAIL',
              'I' : 'INSTITONLY',
              'J' : 'RESTATEONTRADINGHALT',
              'K' : 'CANCELONTRADINGHALT',
              'L' : 'LASTPEG',
              '3' : 'GOALONG',
              'B' : 'OKCROSS',
              '1' : 'NOTHELD'
            }
          },
   '19' : { name: 'ExecRefID', type: 'string' },
   '21' : { name: 'HandlInst', type: 'char',
            enums: {
              '1' : 'AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION',
              '2' : 'AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK',
              '3' : 'MANUAL_ORDER_BEST_EXECUTION'
            }
          },
   '22' : { name: 'SecurityIDSource', type: 'string',
            enums: {
              'E' : 'SICOVAM',
              '2' : 'SEDOL',
              '1' : 'CUSIP',
              '3' : 'QUIK',
              'F' : 'BELGIAN',
              'D' : 'VALOREN',
              'C' : 'DUTCH',
              'B' : 'WERTPAPIER',
              'A' : 'BLOOMBERG_SYMBOL',
              '9' : 'CONSOLIDATED_TAPE_ASSOCIATION',
              '8' : 'EXCHANGE_SYMBOL',
              '7' : 'ISO_COUNTRY_CODE',
              '6' : 'ISO_CURRENCY_CODE',
              '5' : 'RIC_CODE',
              '4' : 'ISIN_NUMBER',
              'G' : 'COMMON'
            }
          },
   '23' : { name: 'IOIid', type: 'string' },
   '25' : { name: 'IOIQltyInd', type: 'char',
            enums: {
              'M' : 'MEDIUM',
              'H' : 'HIGH',
              'L' : 'LOW'
            }
          },
   '26' : { name: 'IOIRefID', type: 'string' },
   '27' : { name: 'IOIQty', type: 'string',
            enums: {
              'L' : 'LARGE',
              'M' : 'MEDIUM',
              'S' : 'SMALL'
            }
          },
   '28' : { name: 'IOITransType', type: 'char',
            enums: {
              'C' : 'CANCEL',
              'N' : 'NEW',
              'R' : 'REPLACE'
            }
          },
   '29' : { name: 'LastCapacity', type: 'char',
            enums: {
              '4' : 'PRINCIPAL',
              '3' : 'CROSS_AS_PRINCIPAL',
              '1' : 'AGENT',
              '2' : 'CROSS_AS_AGENT'
            }
          },
   '30' : { name: 'LastMkt', type: 'exchange' },
   '31' : { name: 'LastPx', type: 'price' },
   '32' : { name: 'LastQty', type: 'qty' },
   '33' : { name: 'LinesOfText', type: 'numingroup' },
   '34' : { name: 'MsgSeqNum', type: 'seqnum' },
   '35' : { name: 'MsgType', type: 'string',
            enums: {
              '0' : 'HEARTBEAT',
              '1' : 'TEST_REQUEST',
              '2' : 'RESEND_REQUEST',
              '3' : 'REJECT',
              '4' : 'SEQUENCE_RESET',
              '5' : 'LOGOUT',
              '6' : 'INDICATION_OF_INTEREST',
              '7' : 'ADVERTISEMENT',
              '8' : 'EXECUTION_REPORT',
              '9' : 'ORDER_CANCEL_REJECT',
              'a' : 'QUOTE_STATUS_REQUEST',
              'A' : 'LOGON',
              'AA' : 'DERIVATIVE_SECURITY_LIST',
              'AB' : 'NEW_ORDER_AB',
              'AC' : 'MULTILEG_ORDER_CANCEL_REPLACE',
              'AD' : 'TRADE_CAPTURE_REPORT_REQUEST',
              'AE' : 'TRADE_CAPTURE_REPORT',
              'AF' : 'ORDER_MASS_STATUS_REQUEST',
              'AG' : 'QUOTE_REQUEST_REJECT',
              'AH' : 'RFQ_REQUEST',
              'AI' : 'QUOTE_STATUS_REPORT',
              'b' : 'MASS_QUOTE_ACKNOWLEDGEMENT',
              'B' : 'NEWS',
              'c' : 'SECURITY_DEFINITION_REQUEST',
              'C' : 'EMAIL',
              'd' : 'SECURITY_DEFINITION',
              'D' : 'ORDER_SINGLE',
              'e' : 'SECURITY_STATUS_REQUEST',
              'E' : 'ORDER_LIST',
              'f' : 'SECURITY_STATUS',
              'F' : 'ORDER_CANCEL_REQUEST',
              'G' : 'ORDER_CANCEL_REPLACE_REQUEST',
              'g' : 'TRADING_SESSION_STATUS_REQUEST',
              'h' : 'TRADING_SESSION_STATUS',
              'H' : 'ORDER_STATUS_REQUEST',
              'i' : 'MASS_QUOTE',
              'j' : 'BUSINESS_MESSAGE_REJECT',
              'J' : 'ALLOCATION',
              'K' : 'LIST_CANCEL_REQUEST',
              'k' : 'BID_REQUEST',
              'l' : 'BID_RESPONSE',
              'L' : 'LIST_EXECUTE',
              'm' : 'LIST_STRIKE_PRICE',
              'M' : 'LIST_STATUS_REQUEST',
              'N' : 'LIST_STATUS',
              'n' : 'XML_MESSAGE',
              'o' : 'REGISTRATION_INSTRUCTIONS',
              'P' : 'ALLOCATION_ACK',
              'p' : 'REGISTRATION_INSTRUCTIONS_RESPONSE',
              'q' : 'ORDER_MASS_CANCEL_REQUEST',
              'Q' : 'DONT_KNOW_TRADE',
              'r' : 'ORDER_MASS_CANCEL_REPORT',
              'R' : 'QUOTE_REQUEST',
              's' : 'NEW_ORDER_s',
              'S' : 'QUOTE',
              't' : 'CROSS_ORDER_CANCEL_REPLACE_REQUEST',
              'T' : 'SETTLEMENT_INSTRUCTIONS',
              'u' : 'CROSS_ORDER_CANCEL_REQUEST',
              'v' : 'SECURITY_TYPE_REQUEST',
              'V' : 'MARKET_DATA_REQUEST',
              'w' : 'SECURITY_TYPES',
              'W' : 'MARKET_DATA_SNAPSHOT_FULL_REFRESH',
              'x' : 'SECURITY_LIST_REQUEST',
              'X' : 'MARKET_DATA_INCREMENTAL_REFRESH',
              'y' : 'SECURITY_LIST',
              'Y' : 'MARKET_DATA_REQUEST_REJECT',
              'z' : 'DERIVATIVE_SECURITY_LIST_REQUEST',
              'Z' : 'QUOTE_CANCEL'
            }
          },
   '36' : { name: 'NewSeqNo', type: 'seqnum' },
   '37' : { name: 'OrderID', type: 'string' },
   '38' : { name: 'OrderQty', type: 'qty' },
   '39' : { name: 'OrdStatus', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'PARTIALLY_FILLED',
              '5' : 'REPLACED',
              '2' : 'FILLED',
              '6' : 'PENDING_CANCEL',
              '7' : 'STOPPED',
              '8' : 'REJECTED',
              '9' : 'SUSPENDED',
              'A' : 'PENDING_NEW',
              'B' : 'CALCULATED',
              'C' : 'EXPIRED',
              'D' : 'ACCEPTED_FOR_BIDDING',
              'E' : 'PENDING_REPLACE',
              '3' : 'DONE_FOR_DAY',
              '4' : 'CANCELED'
            }
          },
   '40' : { name: 'OrdType', type: 'char',
            enums: {
              'D' : 'PREVIOUSLY_QUOTED',
              '2' : 'LIMIT',
              '3' : 'STOP',
              '4' : 'STOP_LIMIT',
              '5' : 'MARKET_ON_CLOSE',
              '6' : 'WITH_OR_WITHOUT',
              '7' : 'LIMIT_OR_BETTER',
              '8' : 'LIMIT_WITH_OR_WITHOUT',
              '9' : 'ON_BASIS',
              'A' : 'ON_CLOSE',
              '1' : 'MARKET',
              'C' : 'FOREX_C',
              'F' : 'FOREX_F',
              'E' : 'PREVIOUSLY_INDICATED',
              'G' : 'FOREX_G',
              'I' : 'FUNARI',
              'J' : 'MARKET_IF_TOUCHED',
              'K' : 'MARKET_WITH_LEFTOVER_AS_LIMIT',
              'L' : 'PREVIOUS_FUND_VALUATION_POINT',
              'M' : 'NEXT_FUND_VALUATION_POINT',
              'P' : 'PEGGED',
              'B' : 'LIMIT_ON_CLOSE',
              'H' : 'FOREX_H'
            }
          },
   '41' : { name: 'OrigClOrdID', type: 'string' },
   '42' : { name: 'OrigTime', type: 'utctimestamp' },
   '43' : { name: 'PossDupFlag', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
   '44' : { name: 'Price', type: 'price' },
   '45' : { name: 'RefSeqNum', type: 'seqnum' },
   '47' : { name: 'Rule80A', type: 'char',
            enums: {
              'N' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_MEMBER',
              'B' : 'SHORT_EXEMPT_TRANSACTION_B',
              'D' : 'PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRM_ORG',
              'E' : 'SHORT_EXEMPT_TRANSACTION_FOR_PRINCIPAL',
              'F' : 'SHORT_EXEMPT_TRANSACTION_F',
              'H' : 'SHORT_EXEMPT_TRANSACTION_H',
              'I' : 'INDIVIDUAL_INVESTOR_SINGLE_ORDER',
              'J' : 'PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER',
              'K' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER',
              'M' : 'PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER',
              'A' : 'AGENCY_SINGLE_ORDER',
              'O' : 'PROPRIETARY_TRANSACTIONS_FOR_COMPETING_MARKET_MAKER_THAT_IS_AFFILIATED_WITH_THE_CLEARING_MEMBER',
              'P' : 'PRINCIPAL',
              'R' : 'TRANSACTIONS_FOR_THE_ACCOUNT_OF_A_NON_MEMBER_COMPETING_MARKET_MAKER',
              'S' : 'SPECIALIST_TRADES',
              'T' : 'TRANSACTIONS_FOR_THE_ACCOUNT_OF_AN_UNAFFILIATED_MEMBERS_COMPETING_MARKET_MAKER',
              'U' : 'PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY',
              'W' : 'ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER',
              'X' : 'SHORT_EXEMPT_TRANSACTION_FOR_MEMBER_COMPETING_MARKET_MAKER_NOT_AFFILIATED_WITH_THE_FIRM_CLEARING_THE_TRADE',
              'Y' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_AGENCY',
              'Z' : 'SHORT_EXEMPT_TRANSACTION_FOR_NON_MEMBER_COMPETING_MARKET_MAKER',
              'L' : 'SHORT_EXEMPT_TRANSACTION_FOR_MEMBER_COMPETING_MARKET_MAKER_AFFILIATED_WITH_THE_FIRM_CLEARING_THE_TRADE',
              'C' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_MEMBER_FIRM_ORG'
            }
          },
   '48' : { name: 'SecurityID', type: 'string' },
   '49' : { name: 'SenderCompID', type: 'string' },
   '50' : { name: 'SenderSubID', type: 'string' },
   '52' : { name: 'SendingTime', type: 'utctimestamp' },
   '53' : { name: 'Quantity', type: 'qty' },
   '54' : { name: 'Side', type: 'char',
            enums: {
              '6' : 'SELL_SHORT_EXEMPT',
              'B' : 'AS_DEFINED',
              'C' : 'OPPOSITE',
              '8' : 'CROSS',
              '9' : 'CROSS_SHORT',
              '1' : 'BUY',
              '2' : 'SELL',
              '3' : 'BUY_MINUS',
              '4' : 'SELL_PLUS',
              'A' : 'CROSS_SHORT_EXEMPT',
              '5' : 'SELL_SHORT',
              '7' : 'UNDISCLOSED'
            }
          },
   '55' : { name: 'Symbol', type: 'string' },
   '56' : { name: 'TargetCompID', type: 'string' },
   '57' : { name: 'TargetSubID', type: 'string' },
   '58' : { name: 'Text', type: 'string' },
   '59' : { name: 'TimeInForce', type: 'char',
            enums: {
              '7' : 'AT_THE_CLOSE',
              '0' : 'DAY',
              '1' : 'GOOD_TILL_CANCEL',
              '2' : 'AT_THE_OPENING',
              '3' : 'IMMEDIATE_OR_CANCEL',
              '4' : 'FILL_OR_KILL',
              '5' : 'GOOD_TILL_CROSSING',
              '6' : 'GOOD_TILL_DATE'
            }
          },
   '60' : { name: 'TransactTime', type: 'utctimestamp' },
   '61' : { name: 'Urgency', type: 'char',
            enums: {
              '1' : 'FLASH',
              '2' : 'BACKGROUND',
              '0' : 'NORMAL'
            }
          },
   '62' : { name: 'ValidUntilTime', type: 'utctimestamp' },
   '63' : { name: 'SettlmntTyp', type: 'char',
            enums: {
              '5' : 'T_PLUS_4',
              'A' : 'T_PLUS_1',
              '6' : 'FUTURE',
              '3' : 'T_PLUS_2',
              '2' : 'NEXT_DAY',
              '8' : 'SELLERS_OPTION',
              '1' : 'CASH',
              '7' : 'WHEN_AND_IF_ISSUED',
              '0' : 'REGULAR',
              '9' : 'T_PLUS_5',
              '4' : 'T_PLUS_3'
            }
          },
   '64' : { name: 'FutSettDate', type: 'localmktdate' },
   '65' : { name: 'SymbolSfx', type: 'string' },
   '66' : { name: 'ListID', type: 'string' },
   '67' : { name: 'ListSeqNo', type: 'int' },
   '68' : { name: 'TotNoOrders', type: 'int' },
   '69' : { name: 'ListExecInst', type: 'string' },
   '70' : { name: 'AllocID', type: 'string' },
   '71' : { name: 'AllocTransType', type: 'char',
            enums: {
              '5' : 'CALCULATED_WITHOUT_PRELIMINARY',
              '4' : 'CALCULATED',
              '3' : 'PRELIMINARY',
              '2' : 'CANCEL',
              '1' : 'REPLACE',
              '0' : 'NEW'
            }
          },
   '72' : { name: 'RefAllocID', type: 'string' },
   '73' : { name: 'NoOrders', type: 'numingroup' },
   '74' : { name: 'AvgPrxPrecision', type: 'int' },
   '75' : { name: 'TradeDate', type: 'localmktdate' },
   '77' : { name: 'PositionEffect', type: 'char',
            enums: {
              'F' : 'FIFO',
              'R' : 'ROLLED',
              'C' : 'CLOSE',
              'O' : 'OPEN'
            }
          },
   '78' : { name: 'NoAllocs', type: 'numingroup' },
   '79' : { name: 'AllocAccount', type: 'string' },
   '80' : { name: 'AllocQty', type: 'qty' },
   '81' : { name: 'ProcessCode', type: 'char',
            enums: {
              '6' : 'PLAN_SPONSOR',
              '0' : 'REGULAR',
              '1' : 'SOFT_DOLLAR',
              '2' : 'STEP_IN',
              '3' : 'STEP_OUT',
              '4' : 'SOFT_DOLLAR_STEP_IN',
              '5' : 'SOFT_DOLLAR_STEP_OUT'
            }
          },
   '82' : { name: 'NoRpts', type: 'numingroup' },
   '83' : { name: 'RptSeq', type: 'int' },
   '84' : { name: 'CxlQty', type: 'qty' },
   '87' : { name: 'AllocStatus', type: 'int',
            enums: {
              '1' : 'REJECTED',
              '2' : 'PARTIAL_ACCEPT',
              '3' : 'RECEIVED',
              '0' : 'ACCEPTED'
            }
          },
   '88' : { name: 'AllocRejCode', type: 'int',
            enums: {
              '0' : 'UNKNOWN_ACCOUNT',
              '6' : 'UNKNOWN_LISTID',
              '3' : 'UNKNOWN_EXECUTING_BROKER_MNEMONIC',
              '5' : 'UNKNOWN_ORDERID',
              '7' : 'OTHER',
              '4' : 'COMMISSION_DIFFERENCE',
              '1' : 'INCORRECT_QUANTITY',
              '2' : 'INCORRECT_AVERAGE_PRICE'
            }
          },
   '89' : { name: 'Signature', type: 'data' },
   '90' : { name: 'SecureDataLen', type: 'length' },
   '91' : { name: 'SecureData', type: 'data' },
   '93' : { name: 'SignatureLength', type: 'length' },
   '94' : { name: 'EmailType', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'REPLY',
              '2' : 'ADMIN_REPLY'
            }
          },
   '95' : { name: 'RawDataLength', type: 'length' },
   '96' : { name: 'RawData', type: 'data' },
   '97' : { name: 'PossResend', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
   '98' : { name: 'EncryptMethod', type: 'int',
            enums: {
              '2' : 'DES',
              '6' : 'PEM_DES_MD5',
              '5' : 'PGP_DES_MD5',
              '3' : 'PKCS_DES',
              '0' : 'NONE',
              '1' : 'PKCS',
              '4' : 'PGP_DES'
            }
          },
   '99' : { name: 'StopPx', type: 'price' },
  '100' : { name: 'ExDestination', type: 'exchange' },
  '102' : { name: 'CxlRejReason', type: 'int',
            enums: {
              '1' : 'UNKNOWN_ORDER',
              '0' : 'TOO_LATE_TO_CANCEL',
              '6' : 'DUPLICATE_CLORDID_RECEIVED',
              '5' : 'ORIGORDMODTIME_DID_NOT_MATCH_LAST_TRANSACTTIME_OF_ORDER',
              '4' : 'UNABLE_TO_PROCESS_ORDER_MASS_CANCEL_REQUEST',
              '3' : 'ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS',
              '2' : 'BROKER'
            }
          },
  '103' : { name: 'OrdRejReason', type: 'int',
            enums: {
              '2' : 'EXCHANGE_CLOSED',
              '1' : 'UNKNOWN_SYMBOL',
              '3' : 'ORDER_EXCEEDS_LIMIT',
              '4' : 'TOO_LATE_TO_ENTER',
              '5' : 'UNKNOWN_ORDER',
              '7' : 'DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER',
              '9' : 'TRADE_ALONG_REQUIRED',
              '10' : 'INVALID_INVESTOR_ID',
              '6' : 'DUPLICATE_ORDER',
              '11' : 'UNSUPPORTED_ORDER_CHARACTERISTIC',
              '12' : 'SURVEILLENCE_OPTION',
              '0' : 'BROKER',
              '8' : 'STALE_ORDER'
            }
          },
  '104' : { name: 'IOIQualifier', type: 'char',
            enums: {
              'O' : 'AT_THE_OPEN',
              'X' : 'CROSSING_OPPORTUNITY',
              'W' : 'INDICATION',
              'V' : 'VERSUS',
              'T' : 'THROUGH_THE_DAY',
              'S' : 'PORTFOLIO_SHOWN',
              'R' : 'READY_TO_TRADE',
              'A' : 'ALL_OR_NONE',
              'P' : 'TAKING_A_POSITION',
              'M' : 'MORE_BEHIND',
              'L' : 'LIMIT',
              'I' : 'IN_TOUCH_WITH',
              'D' : 'VWAP',
              'C' : 'AT_THE_CLOSE',
              'B' : 'MARKET_ON_CLOSE',
              'Q' : 'AT_THE_MARKET',
              'Y' : 'AT_THE_MIDPOINT',
              'Z' : 'PRE_OPEN'
            }
          },
  '106' : { name: 'Issuer', type: 'string' },
  '107' : { name: 'SecurityDesc', type: 'string' },
  '108' : { name: 'HeartBtInt', type: 'int' },
  '110' : { name: 'MinQty', type: 'qty' },
  '111' : { name: 'MaxFloor', type: 'qty' },
  '112' : { name: 'TestReqID', type: 'string' },
  '113' : { name: 'ReportToExch', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '114' : { name: 'LocateReqd', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '115' : { name: 'OnBehalfOfCompID', type: 'string' },
  '116' : { name: 'OnBehalfOfSubID', type: 'string' },
  '117' : { name: 'QuoteID', type: 'string' },
  '118' : { name: 'NetMoney', type: 'amt' },
  '119' : { name: 'SettlCurrAmt', type: 'amt' },
  '120' : { name: 'SettlCurrency', type: 'currency' },
  '121' : { name: 'ForexReq', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '122' : { name: 'OrigSendingTime', type: 'utctimestamp' },
  '123' : { name: 'GapFillFlag', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '124' : { name: 'NoExecs', type: 'numingroup' },
  '126' : { name: 'ExpireTime', type: 'utctimestamp' },
  '127' : { name: 'DKReason', type: 'char',
            enums: {
              'B' : 'WRONG_SIDE',
              'C' : 'QUANTITY_EXCEEDS_ORDER',
              'D' : 'NO_MATCHING_ORDER',
              'E' : 'PRICE_EXCEEDS_LIMIT',
              'Z' : 'OTHER',
              'A' : 'UNKNOWN_SYMBOL'
            }
          },
  '128' : { name: 'DeliverToCompID', type: 'string' },
  '129' : { name: 'DeliverToSubID', type: 'string' },
  '130' : { name: 'IOINaturalFlag', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '131' : { name: 'QuoteReqID', type: 'string' },
  '132' : { name: 'BidPx', type: 'price' },
  '133' : { name: 'OfferPx', type: 'price' },
  '134' : { name: 'BidSize', type: 'qty' },
  '135' : { name: 'OfferSize', type: 'qty' },
  '136' : { name: 'NoMiscFees', type: 'numingroup' },
  '137' : { name: 'MiscFeeAmt', type: 'amt' },
  '138' : { name: 'MiscFeeCurr', type: 'currency' },
  '139' : { name: 'MiscFeeType', type: 'char',
            enums: {
              '3' : 'LOCAL_COMMISSION',
              '4' : 'EXCHANGE_FEES',
              '5' : 'STAMP',
              '6' : 'LEVY',
              '7' : 'OTHER',
              '8' : 'MARKUP',
              '9' : 'CONSUMPTION_TAX',
              '1' : 'REGULATORY',
              '2' : 'TAX'
            }
          },
  '140' : { name: 'PrevClosePx', type: 'price' },
  '141' : { name: 'ResetSeqNumFlag', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '142' : { name: 'SenderLocationID', type: 'string' },
  '143' : { name: 'TargetLocationID', type: 'string' },
  '144' : { name: 'OnBehalfOfLocationID', type: 'string' },
  '145' : { name: 'DeliverToLocationID', type: 'string' },
  '146' : { name: 'NoRelatedSym', type: 'numingroup' },
  '147' : { name: 'Subject', type: 'string' },
  '148' : { name: 'Headline', type: 'string' },
  '149' : { name: 'URLLink', type: 'string' },
  '150' : { name: 'ExecType', type: 'char',
            enums: {
              '6' : 'PENDING_CANCEL',
              '0' : 'NEW',
              '1' : 'PARTIAL_FILL',
              '2' : 'FILL',
              '4' : 'CANCELED',
              '5' : 'REPLACE',
              '8' : 'REJECTED',
              '9' : 'SUSPENDED',
              'A' : 'PENDING_NEW',
              'B' : 'CALCULATED',
              'C' : 'EXPIRED',
              'D' : 'RESTATED',
              'E' : 'PENDING_REPLACE',
              'F' : 'TRADE',
              'G' : 'TRADE_CORRECT',
              'H' : 'TRADE_CANCEL',
              'I' : 'ORDER_STATUS',
              '3' : 'DONE_FOR_DAY',
              '7' : 'STOPPED'
            }
          },
  '151' : { name: 'LeavesQty', type: 'qty' },
  '152' : { name: 'CashOrderQty', type: 'qty' },
  '153' : { name: 'AllocAvgPx', type: 'price' },
  '154' : { name: 'AllocNetMoney', type: 'amt' },
  '155' : { name: 'SettlCurrFxRate', type: 'float' },
  '156' : { name: 'SettlCurrFxRateCalc', type: 'char',
            enums: {
              'D' : 'DIVIDE',
              'M' : 'MULTIPLY'
            }
          },
  '157' : { name: 'NumDaysInterest', type: 'int' },
  '158' : { name: 'AccruedInterestRate', type: 'percentage' },
  '159' : { name: 'AccruedInterestAmt', type: 'amt' },
  '160' : { name: 'SettlInstMode', type: 'char',
            enums: {
              '0' : 'DEFAULT',
              '4' : 'SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT',
              '3' : 'SPECIFIC_ALLOCATION_ACCOUNT_STANDING',
              '1' : 'STANDING_INSTRUCTIONS_PROVIDED',
              '2' : 'SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING'
            }
          },
  '161' : { name: 'AllocText', type: 'string' },
  '162' : { name: 'SettlInstID', type: 'string' },
  '163' : { name: 'SettlInstTransType', type: 'char',
            enums: {
              'N' : 'NEW',
              'R' : 'REPLACE',
              'C' : 'CANCEL'
            }
          },
  '164' : { name: 'EmailThreadID', type: 'string' },
  '165' : { name: 'SettlInstSource', type: 'char',
            enums: {
              '2' : 'INSTITUTIONS_INSTRUCTIONS',
              '3' : 'INVESTOR',
              '1' : 'BROKERS_INSTRUCTIONS'
            }
          },
  '167' : { name: 'SecurityType', type: 'string',
            enums: {
              'CP' : 'COMMERCIAL_PAPER',
              'VRDN' : 'VARIABLE_RATE_DEMAND_NOTE',
              'PZFJ' : 'PLAZOS_FIJOS',
              'PN' : 'PROMISSORY_NOTE',
              'ONITE' : 'OVERNIGHT',
              'MTN' : 'MEDIUM_TERM_NOTES',
              'TECP' : 'TAX_EXEMPT_COMMERCIAL_PAPER',
              'AMENDED' : 'AMENDED_RESTATED',
              'BRIDGE' : 'BRIDGE_LOAN',
              'LOFC' : 'LETTER_OF_CREDIT',
              'SWING' : 'SWING_LINE_FACILITY',
              'DINP' : 'DEBTOR_IN_POSSESSION',
              'DEFLTED' : 'DEFAULTED',
              'WITHDRN' : 'WITHDRAWN',
              'LQN' : 'LIQUIDITY_NOTE',
              'MATURED' : 'MATURED',
              'DN' : 'DEPOSIT_NOTES',
              'RETIRED' : 'RETIRED',
              'BA' : 'BANKERS_ACCEPTANCE',
              'BN' : 'BANK_NOTES',
              'BOX' : 'BILL_OF_EXCHANGES',
              'CD' : 'CERTIFICATE_OF_DEPOSIT',
              'CL' : 'CALL_LOANS',
              'REPLACD' : 'REPLACED',
              'MT' : 'MANDATORY_TENDER',
              'RVLVTRM' : 'REVOLVER_TERM_LOAN',
              'MPP' : 'MORTGAGE_PRIVATE_PLACEMENT',
              'STN' : 'SHORT_TERM_LOAN_NOTE',
              'MPT' : 'MISCELLANEOUS_PASS_THROUGH',
              'TBA' : 'TO_BE_ANNOUNCED',
              'AN' : 'OTHER_ANTICIPATION_NOTES_BAN_GAN_ETC',
              'MIO' : 'MORTGAGE_INTEREST_ONLY',
              'COFP' : 'CERTIFICATE_OF_PARTICIPATION',
              'MBS' : 'MORTGAGE_BACKED_SECURITIES',
              'REV' : 'REVENUE_BONDS',
              'SPCLA' : 'SPECIAL_ASSESSMENT',
              'SPCLO' : 'SPECIAL_OBLIGATION',
              'SPCLT' : 'SPECIAL_TAX',
              'TAN' : 'TAX_ANTICIPATION_NOTE',
              'TAXA' : 'TAX_ALLOCATION',
              'COFO' : 'CERTIFICATE_OF_OBLIGATION',
              'TD' : 'TIME_DEPOSIT',
              'GO' : 'GENERAL_OBLIGATION_BONDS',
              '?' : 'WILDCARD_ENTRY',
              'WAR' : 'WARRANT',
              'MF' : 'MUTUAL_FUND',
              'MLEG' : 'MULTI_LEG_INSTRUMENT',
              'TRAN' : 'TAX_REVENUE_ANTICIPATION_NOTE',
              'MPO' : 'MORTGAGE_PRINCIPAL_ONLY',
              'RP' : 'REPURCHASE_AGREEMENT',
              'NONE' : 'NO_SECURITY_TYPE',
              'XCN' : 'EXTENDED_COMM_NOTE',
              'POOL' : 'AGENCY_POOLS',
              'ABS' : 'ASSET_BACKED_SECURITIES',
              'CMBS' : 'CORP_MORTGAGE_BACKED_SECURITIES',
              'CMO' : 'COLLATERALIZED_MORTGAGE_OBLIGATION',
              'IET' : 'IOETTE_MORTGAGE',
              'RVRP' : 'REVERSE_REPURCHASE_AGREEMENT',
              'FOR' : 'FOREIGN_EXCHANGE_CONTRACT',
              'RAN' : 'REVENUE_ANTICIPATION_NOTE',
              'RVLV' : 'REVOLVER_LOAN',
              'FAC' : 'FEDERAL_AGENCY_COUPON',
              'FADN' : 'FEDERAL_AGENCY_DISCOUNT_NOTE',
              'PEF' : 'PRIVATE_EXPORT_FUNDING',
              'CORP' : 'CORPORATE_BOND',
              'CPP' : 'CORPORATE_PRIVATE_PLACEMENT',
              'CB' : 'CONVERTIBLE_BOND',
              'DUAL' : 'DUAL_CURRENCY',
              'XLINKD' : 'INDEXED_LINKED',
              'YANK' : 'YANKEE_CORPORATE_BOND',
              'CS' : 'COMMON_STOCK',
              'PS' : 'PREFERRED_STOCK',
              'BRADY' : 'BRADY_BOND',
              'TBOND' : 'US_TREASURY_BOND',
              'TINT' : 'INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE',
              'TIPS' : 'TREASURY_INFLATION_PROTECTED_SECURITIES',
              'TCAL' : 'PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE',
              'TPRN' : 'PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE',
              'UST' : 'US_TREASURY_NOTE_BOND',
              'USTB' : 'US_TREASURY_BILL',
              'TERM' : 'TERM_LOAN',
              'STRUCT' : 'STRUCTURED_NOTES'
            }
          },
  '168' : { name: 'EffectiveTime', type: 'utctimestamp' },
  '169' : { name: 'StandInstDbType', type: 'int',
            enums: {
              '0' : 'OTHER',
              '1' : 'DTC_SID',
              '3' : 'A_GLOBAL_CUSTODIAN',
              '2' : 'THOMSON_ALERT'
            }
          },
  '170' : { name: 'StandInstDbName', type: 'string' },
  '171' : { name: 'StandInstDbID', type: 'string' },
  '172' : { name: 'SettlDeliveryType', type: 'int',
            enums: {
              '1' : 'FREE',
              '0' : 'VERSUS_PAYMENT'
            }
          },
  '173' : { name: 'SettlDepositoryCode', type: 'string' },
  '174' : { name: 'SettlBrkrCode', type: 'string' },
  '175' : { name: 'SettlInstCode', type: 'string' },
  '176' : { name: 'SecuritySettlAgentName', type: 'string' },
  '177' : { name: 'SecuritySettlAgentCode', type: 'string' },
  '178' : { name: 'SecuritySettlAgentAcctNum', type: 'string' },
  '179' : { name: 'SecuritySettlAgentAcctName', type: 'string' },
  '180' : { name: 'SecuritySettlAgentContactName', type: 'string' },
  '181' : { name: 'SecuritySettlAgentContactPhone', type: 'string' },
  '182' : { name: 'CashSettlAgentName', type: 'string' },
  '183' : { name: 'CashSettlAgentCode', type: 'string' },
  '184' : { name: 'CashSettlAgentAcctNum', type: 'string' },
  '185' : { name: 'CashSettlAgentAcctName', type: 'string' },
  '186' : { name: 'CashSettlAgentContactName', type: 'string' },
  '187' : { name: 'CashSettlAgentContactPhone', type: 'string' },
  '188' : { name: 'BidSpotRate', type: 'price' },
  '189' : { name: 'BidForwardPoints', type: 'priceoffset' },
  '190' : { name: 'OfferSpotRate', type: 'price' },
  '191' : { name: 'OfferForwardPoints', type: 'priceoffset' },
  '192' : { name: 'OrderQty2', type: 'qty' },
  '193' : { name: 'FutSettDate2', type: 'localmktdate' },
  '194' : { name: 'LastSpotRate', type: 'price' },
  '195' : { name: 'LastForwardPoints', type: 'priceoffset' },
  '196' : { name: 'AllocLinkID', type: 'string' },
  '197' : { name: 'AllocLinkType', type: 'int',
            enums: {
              '0' : 'F_X_NETTING',
              '1' : 'F_X_SWAP'
            }
          },
  '198' : { name: 'SecondaryOrderID', type: 'string' },
  '199' : { name: 'NoIOIQualifiers', type: 'numingroup' },
  '200' : { name: 'MaturityMonthYear', type: 'monthyear' },
  '202' : { name: 'StrikePrice', type: 'price' },
  '203' : { name: 'CoveredOrUncovered', type: 'int',
            enums: {
              '1' : 'UNCOVERED',
              '0' : 'COVERED'
            }
          },
  '206' : { name: 'OptAttribute', type: 'char' },
  '207' : { name: 'SecurityExchange', type: 'exchange' },
  '208' : { name: 'NotifyBrokerOfCredit', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '209' : { name: 'AllocHandlInst', type: 'int',
            enums: {
              '3' : 'FORWARD_AND_MATCH',
              '2' : 'FORWARD',
              '1' : 'MATCH'
            }
          },
  '210' : { name: 'MaxShow', type: 'qty' },
  '211' : { name: 'PegDifference', type: 'priceoffset' },
  '212' : { name: 'XmlDataLen', type: 'length' },
  '213' : { name: 'XmlData', type: 'data' },
  '214' : { name: 'SettlInstRefID', type: 'string' },
  '215' : { name: 'NoRoutingIDs', type: 'numingroup' },
  '216' : { name: 'RoutingType', type: 'int',
            enums: {
              '1' : 'TARGET_FIRM',
              '2' : 'TARGET_LIST',
              '3' : 'BLOCK_FIRM',
              '4' : 'BLOCK_LIST'
            }
          },
  '217' : { name: 'RoutingID', type: 'string' },
  '218' : { name: 'Spread', type: 'priceoffset' },
  '219' : { name: 'Benchmark', type: 'char',
            enums: {
              '5' : 'OLD_10',
              '1' : 'CURVE',
              '2' : '5_YR',
              '4' : '10_YR',
              '6' : '30_YR',
              '7' : 'OLD_30',
              '8' : '3_MO_LIBOR',
              '9' : '6_MO_LIBOR',
              '3' : 'OLD_5'
            }
          },
  '220' : { name: 'BenchmarkCurveCurrency', type: 'currency' },
  '221' : { name: 'BenchmarkCurveName', type: 'string',
            enums: {
              'SWAP' : 'SWAP',
              'LIBID' : 'LIBID',
              'OTHER' : 'OTHER',
              'Treasury' : 'TREASURY',
              'Euribor' : 'EURIBOR',
              'Pfandbriefe' : 'PFANDBRIEFE',
              'FutureSWAP' : 'FUTURESWAP',
              'MuniAAA' : 'MUNIAAA',
              'LIBOR' : 'LIBOR'
            }
          },
  '222' : { name: 'BenchmarkCurvePoint', type: 'string' },
  '223' : { name: 'CouponRate', type: 'percentage' },
  '224' : { name: 'CouponPaymentDate', type: 'utcdate' },
  '225' : { name: 'IssueDate', type: 'utcdate' },
  '226' : { name: 'RepurchaseTerm', type: 'int' },
  '227' : { name: 'RepurchaseRate', type: 'percentage' },
  '228' : { name: 'Factor', type: 'float' },
  '229' : { name: 'TradeOriginationDate', type: 'utcdate' },
  '230' : { name: 'ExDate', type: 'utcdate' },
  '231' : { name: 'ContractMultiplier', type: 'float' },
  '232' : { name: 'NoStipulations', type: 'numingroup' },
  '233' : { name: 'StipulationType', type: 'string',
            enums: {
              'ABS' : 'ABSOLUTE_PREPAYMENT_SPEED',
              'WALA' : 'WEIGHTED_AVERAGE_LOAN_AGE',
              'WAM' : 'WEIGHTED_AVERAGE_MATURITY',
              'CPR' : 'CONSTANT_PREPAYMENT_RATE',
              'HEP' : 'FINAL_CPR_OF_HOME_EQUITY_PREPAYMENT_CURVE',
              'WAL' : 'WEIGHTED_AVERAGE_LIFE',
              'MHP' : 'OF_MANUFACTURED_HOUSING_PREPAYMENT_CURVE',
              'SMM' : 'SINGLE_MONTHLY_MORTALITY',
              'MPR' : 'MONTHLY_PREPAYMENT_RATE',
              'PSA' : 'OF_BMA_PREPAYMENT_CURVE',
              'PPC' : 'OF_PROSPECTUS_PREPAYMENT_CURVE',
              'CPP' : 'CONSTANT_PREPAYMENT_PENALTY',
              'LOTVAR' : 'LOT_VARIANCE',
              'CPY' : 'CONSTANT_PREPAYMENT_YIELD',
              'WAC' : 'WEIGHTED_AVERAGE_COUPON',
              'ISSUE' : 'YEAR_OF_ISSUE',
              'MAT' : 'MATURITY_YEAR',
              'PIECES' : 'NUMBER_OF_PIECES',
              'PMAX' : 'POOLS_MAXIMUM',
              'PPM' : 'POOLS_PER_MILLION',
              'PPL' : 'POOLS_PER_LOT',
              'PPT' : 'POOLS_PER_TRADE',
              'PROD' : 'PRODUCTION_YEAR',
              'TRDVAR' : 'TRADE_VARIANCE',
              'GEOG' : 'GEOGRAPHICS'
            }
          },
  '234' : { name: 'StipulationValue', type: 'string' },
  '235' : { name: 'YieldType', type: 'string',
            enums: {
              'TRUE' : 'TRUE_YIELD_THE_YIELD_CALCULATED_WITH_COUPON_DATES_MOVED_FROM_A_WEEKEND_OR_HOLIDAY_TO_THE_NEXT_VALID_SETTLEMENT_DATE',
              'PREVCLOSE' : 'PREVIOUS_CLOSE_YIELD_THE_YIELD_OF_A_BOND_BASED_ON_THE_CLOSING_PRICE_1_DAY_AGO',
              'LONGEST' : 'YIELD_TO_LONGEST_AVERAGE',
              'LONGAVGLIFE' : 'YIELD_TO_LONGEST_AVERAGE_LIFE_THE_YIELD_ASSUMING_ONLY_MANDATORY_SINKS_ARE_TAKEN_THIS_RESULTS_IN_A_LOWER_PAYDOWN_OF_DEBT_THE_YIELD_IS_THEN_CALCULATED_TO_THE_FINAL_PAYMENT_DATE',
              'MATURITY' : 'YIELD_TO_MATURITY_THE_YIELD_OF_A_BOND_TO_ITS_MATURITY_DATE',
              'MARK' : 'MARK_TO_MARKET_YIELD_AN_ADJUSTMENT_IN_THE_VALUATION_OF_A_SECURITIES_PORTFOLIO_TO_REFLECT_THE_CURRENT_MARKET_VALUES_OF_THE_RESPECTIVE_SECURITIES_IN_THE_PORTFOLIO',
              'OPENAVG' : 'OPEN_AVERAGE_YIELD_THE_AVERAGE_YIELD_OF_THE_RESPECTIVE_SECURITIES_IN_THE_PORTFOLIO',
              'PUT' : 'YIELD_TO_NEXT_PUT_THE_YIELD_TO_THE_DATE_AT_WHICH_THE_BOND_HOLDER_CAN_NEXT_PUT_THE_BOND_TO_THE_ISSUER',
              'PROCEEDS' : 'PROCEEDS_YIELD_THE_CD_EQUIVALENT_YIELD_WHEN_THE_REMAINING_TIME_TO_MATURITY_IS_LESS_THAN_TWO_YEARS',
              'SEMIANNUAL' : 'SEMI_ANNUAL_YIELD_THE_YIELD_OF_A_BOND_WHOSE_COUPON_PAYMENTS_ARE_REINVESTED_SEMI_ANNUALLY',
              'SHORTAVGLIFE' : 'YIELD_TO_SHORTEST_AVERAGE_LIFE_SAME_AS_AVGLIFE_ABOVE',
              'SHORTEST' : 'YIELD_TO_SHORTEST_AVERAGE',
              'SIMPLE' : 'SIMPLE_YIELD_THE_YIELD_OF_A_BOND_ASSUMING_NO_REINVESTMENT_OF_COUPON_PAYMENTS',
              'TENDER' : 'YIELD_TO_TENDER_DATE_THE_YIELD_ON_A_MUNICIPAL_BOND_TO_ITS_MANDATORY_TENDER_DATE',
              'VALUE1/32' : 'YIELD_VALUE_OF_1_32_THE_AMOUNT_THAT_THE_YIELD_WILL_CHANGE_FOR_A_1_32ND_CHANGE_IN_PRICE',
              'WORST' : 'YIELD_TO_WORST_CONVENTION_THE_LOWEST_YIELD_TO_ALL_POSSIBLE_REDEMPTION_DATE_SCENARIOS',
              'TAXEQUIV' : 'TAX_EQUIVALENT_YIELD_THE_AFTER_TAX_YIELD_GROSSED_UP_BY_THE_MAXIMUM_FEDERAL_TAX_RATE_OF_396_FOR_COMPARISON_TO_TAXABLE_YIELDS',
              'ANNUAL' : 'ANNUAL_YIELD_THE_ANNUAL_INTEREST_OR_DIVIDEND_INCOME_AN_INVESTMENT_EARNS_EXPRESSED_AS_A_PERCENTAGE_OF_THE_INVESTMENTS_TOTAL_VALUE',
              'LASTYEAR' : 'CLOSING_YIELD_MOST_RECENT_YEAR_THE_YIELD_OF_A_BOND_BASED_ON_THE_CLOSING_PRICE_AS_OF_THE_MOST_RECENT_YEARS_END',
              'NEXTREFUND' : 'YIELD_TO_NEXT_REFUND',
              'AFTERTAX' : 'AFTER_TAX_YIELD',
              'ATISSUE' : 'YIELD_AT_ISSUE',
              'AVGLIFE' : 'YIELD_TO_AVERAGE_LIFE_THE_YIELD_ASSUMING_THAT_ALL_SINKS',
              'AVGMATURITY' : 'YIELD_TO_AVERAGE_MATURITY_THE_YIELD_ACHIEVED_BY_SUBSTITUTING_A_BONDS_AVERAGE_MATURITY_FOR_THE_ISSUES_FINAL_MATURITY_DATE',
              'BOOK' : 'BOOK_YIELD_THE_YIELD_OF_A_SECURITY_CALCULATED_BY_USING_ITS_BOOK_VALUE_INSTEAD_OF_THE_CURRENT_MARKET_PRICE_THIS_TERM_IS_TYPICALLY_USED_IN_THE_US_DOMESTIC_MARKET',
              'CALL' : 'YIELD_TO_NEXT_CALL_THE_YIELD_OF_A_BOND_TO_THE_NEXT_POSSIBLE_CALL_DATE',
              'CHANGE' : 'YIELD_CHANGE_SINCE_CLOSE_THE_CHANGE_IN_THE_YIELD_SINCE_THE_PREVIOUS_DAYS_CLOSING_YIELD',
              'COMPOUND' : 'COMPOUND_YIELD_THE_YIELD_OF_CERTAIN_JAPANESE_BONDS_BASED_ON_ITS_PRICE_CERTAIN_JAPANESE_BONDS_HAVE_IRREGULAR_FIRST_OR_LAST_COUPONS_AND_THE_YIELD_IS_CALCULATED_COMPOUND_FOR_THESE_IRREGULAR_PERIODS',
              'CURRENT' : 'CURRENT_YIELD_ANNUAL_INTEREST_ON_A_BOND_DIVIDED_BY_THE_MARKET_VALUE_THE_ACTUAL_INCOME_RATE_OF_RETURN_AS_OPPOSED_TO_THE_COUPON_RATE_EXPRESSED_AS_A_PERCENTAGE',
              'GROSS' : 'TRUE_GROSS_YIELD_YIELD_CALCULATED_USING_THE_PRICE_INCLUDING_ACCRUED_INTEREST_WHERE_COUPON_DATES_ARE_MOVED_FROM_HOLIDAYS_AND_WEEKENDS_TO_THE_NEXT_TRADING_DAY',
              'GOVTEQUIV' : 'GOVERNMENT_EQUIVALENT_YIELD_ASK_YIELD_BASED_ON_SEMI_ANNUAL_COUPONS_COMPOUNDING_IN_ALL_PERIODS_AND_ACTUAL_ACTUAL_CALENDAR',
              'INFLATION' : 'YIELD_WITH_INFLATION_ASSUMPTION_BASED_ON_PRICE_THE_RETURN_AN_INVESTOR_WOULD_REQUIRE_ON_A_NORMAL_BOND_THAT_WOULD_MAKE_THE_REAL_RETURN_EQUAL_TO_THAT_OF_THE_INFLATION_INDEXED_BOND_ASSUMING_A_CONSTANT_INFLATION_RATE',
              'INVERSEFLOATER' : 'INVERSE_FLOATER_BOND_YIELD_INVERSE_FLOATER_SEMI_ANNUAL_BOND_EQUIVALENT_RATE',
              'LASTQUARTER' : 'CLOSING_YIELD_MOST_RECENT_QUARTER_THE_YIELD_OF_A_BOND_BASED_ON_THE_CLOSING_PRICE_AS_OF_THE_MOST_RECENT_QUARTERS_END',
              'LASTCLOSE' : 'MOST_RECENT_CLOSING_YIELD_THE_LAST_AVAILABLE_YIELD_STORED_IN_HISTORY_COMPUTED_USING_PRICE',
              'LASTMONTH' : 'CLOSING_YIELD_MOST_RECENT_MONTH_THE_YIELD_OF_A_BOND_BASED_ON_THE_CLOSING_PRICE_AS_OF_THE_MOST_RECENT_MONTHS_END',
              'CLOSE' : 'CLOSING_YIELD_THE_YIELD_OF_A_BOND_BASED_ON_THE_CLOSING_PRICE'
            }
          },
  '236' : { name: 'Yield', type: 'percentage' },
  '237' : { name: 'TotalTakedown', type: 'amt' },
  '238' : { name: 'Concession', type: 'amt' },
  '239' : { name: 'RepoCollateralSecurityType', type: 'string' },
  '240' : { name: 'RedemptionDate', type: 'utcdate' },
  '241' : { name: 'UnderlyingCouponPaymentDate', type: 'utcdate' },
  '242' : { name: 'UnderlyingIssueDate', type: 'utcdate' },
  '243' : { name: 'UnderlyingRepoCollateralSecurityType', type: 'string' },
  '244' : { name: 'UnderlyingRepurchaseTerm', type: 'int' },
  '245' : { name: 'UnderlyingRepurchaseRate', type: 'percentage' },
  '246' : { name: 'UnderlyingFactor', type: 'float' },
  '247' : { name: 'UnderlyingRedemptionDate', type: 'utcdate' },
  '248' : { name: 'LegCouponPaymentDate', type: 'utcdate' },
  '249' : { name: 'LegIssueDate', type: 'utcdate' },
  '250' : { name: 'LegRepoCollateralSecurityType', type: 'string' },
  '251' : { name: 'LegRepurchaseTerm', type: 'int' },
  '252' : { name: 'LegRepurchaseRate', type: 'percentage' },
  '253' : { name: 'LegFactor', type: 'float' },
  '254' : { name: 'LegRedemptionDate', type: 'utcdate' },
  '255' : { name: 'CreditRating', type: 'string' },
  '256' : { name: 'UnderlyingCreditRating', type: 'string' },
  '257' : { name: 'LegCreditRating', type: 'string' },
  '258' : { name: 'TradedFlatSwitch', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '259' : { name: 'BasisFeatureDate', type: 'utcdate' },
  '260' : { name: 'BasisFeaturePrice', type: 'price' },
  '262' : { name: 'MDReqID', type: 'string' },
  '263' : { name: 'SubscriptionRequestType', type: 'char',
            enums: {
              '1' : 'SNAPSHOT_PLUS_UPDATES',
              '2' : 'DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST',
              '0' : 'SNAPSHOT'
            }
          },
  '264' : { name: 'MarketDepth', type: 'int' },
  '265' : { name: 'MDUpdateType', type: 'int',
            enums: {
              '0' : 'FULL_REFRESH',
              '1' : 'INCREMENTAL_REFRESH'
            }
          },
  '266' : { name: 'AggregatedBook', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '267' : { name: 'NoMDEntryTypes', type: 'numingroup' },
  '268' : { name: 'NoMDEntries', type: 'numingroup' },
  '269' : { name: 'MDEntryType', type: 'char',
            enums: {
              '7' : 'TRADING_SESSION_HIGH_PRICE',
              '1' : 'OFFER',
              'A' : 'IMBALANCE',
              '9' : 'TRADING_SESSION_VWAP_PRICE',
              '8' : 'TRADING_SESSION_LOW_PRICE',
              '5' : 'CLOSING_PRICE',
              '4' : 'OPENING_PRICE',
              '0' : 'BID',
              '2' : 'TRADE',
              '3' : 'INDEX_VALUE',
              '6' : 'SETTLEMENT_PRICE'
            }
          },
  '270' : { name: 'MDEntryPx', type: 'price' },
  '271' : { name: 'MDEntrySize', type: 'qty' },
  '272' : { name: 'MDEntryDate', type: 'utcdate' },
  '273' : { name: 'MDEntryTime', type: 'utctimeonly' },
  '274' : { name: 'TickDirection', type: 'char',
            enums: {
              '0' : 'PLUS_TICK',
              '1' : 'ZERO_PLUS_TICK',
              '2' : 'MINUS_TICK',
              '3' : 'ZERO_MINUS_TICK'
            }
          },
  '275' : { name: 'MDMkt', type: 'exchange' },
  '276' : { name: 'QuoteCondition', type: 'multiplevaluestring',
            enums: {
              'E' : 'LOCKED',
              'I' : 'NON_FIRM',
              'H' : 'FAST_TRADING',
              'F' : 'CROSSED',
              'D' : 'CONSOLIDATED_BEST',
              'C' : 'EXCHANGE_BEST',
              'B' : 'CLOSED',
              'A' : 'OPEN',
              'G' : 'DEPTH'
            }
          },
  '277' : { name: 'TradeCondition', type: 'multiplevaluestring',
            enums: {
              'J' : 'NEXT_DAY_TRADE',
              'K' : 'OPENED',
              'L' : 'SELLER',
              'B' : 'AVERAGE_PRICE_TRADE',
              'M' : 'SOLD',
              'H' : 'RULE_155_TRADE',
              'N' : 'STOPPED_STOCK',
              'P' : 'IMBALANCE_MORE_BUYERS',
              'Q' : 'IMBALANCE_MORE_SELLERS',
              'R' : 'OPENING_PRICE',
              'I' : 'SOLD_LAST',
              'A' : 'CASH',
              'C' : 'CASH_TRADE',
              'E' : 'OPENING',
              'F' : 'INTRADAY_TRADE_DETAIL',
              'G' : 'RULE_127_TRADE',
              'D' : 'NEXT_DAY'
            }
          },
  '278' : { name: 'MDEntryID', type: 'string' },
  '279' : { name: 'MDUpdateAction', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'CHANGE',
              '2' : 'DELETE'
            }
          },
  '280' : { name: 'MDEntryRefID', type: 'string' },
  '281' : { name: 'MDReqRejReason', type: 'char',
            enums: {
              '7' : 'UNSUPPORTED_AGGREGATEDBOOK',
              '1' : 'DUPLICATE_MDREQID',
              'C' : 'UNSUPPORTED_MDIMPLICITDELETE',
              'B' : 'UNSUPPORTED_OPENCLOSESETTLEFLAG',
              'A' : 'UNSUPPORTED_SCOPE',
              '9' : 'UNSUPPORTED_TRADINGSESSIONID',
              '8' : 'UNSUPPORTED_MDENTRYTYPE',
              '6' : 'UNSUPPORTED_MDUPDATETYPE',
              '5' : 'UNSUPPORTED_MARKETDEPTH',
              '4' : 'UNSUPPORTED_SUBSCRIPTIONREQUESTTYPE',
              '2' : 'INSUFFICIENT_BANDWIDTH',
              '0' : 'UNKNOWN_SYMBOL',
              '3' : 'INSUFFICIENT_PERMISSIONS'
            }
          },
  '282' : { name: 'MDEntryOriginator', type: 'string' },
  '283' : { name: 'LocationID', type: 'string' },
  '284' : { name: 'DeskID', type: 'string' },
  '285' : { name: 'DeleteReason', type: 'char',
            enums: {
              '0' : 'CANCELATION',
              '1' : 'ERROR'
            }
          },
  '286' : { name: 'OpenCloseSettleFlag', type: 'multiplevaluestring',
            enums: {
              '1' : 'SESSION_OPEN',
              '2' : 'DELIVERY_SETTLEMENT_PRICE',
              '3' : 'EXPECTED_PRICE',
              '4' : 'PRICE_FROM_PREVIOUS_BUSINESS_DAY',
              '0' : 'DAILY_OPEN'
            }
          },
  '287' : { name: 'SellerDays', type: 'int' },
  '288' : { name: 'MDEntryBuyer', type: 'string' },
  '289' : { name: 'MDEntrySeller', type: 'string' },
  '290' : { name: 'MDEntryPositionNo', type: 'int' },
  '291' : { name: 'FinancialStatus', type: 'multiplevaluestring',
            enums: {
              '1' : 'BANKRUPT',
              '2' : 'PENDING_DELISTING'
            }
          },
  '292' : { name: 'CorporateAction', type: 'multiplevaluestring',
            enums: {
              'B' : 'EX_DISTRIBUTION',
              'E' : 'EX_INTEREST',
              'C' : 'EX_RIGHTS',
              'A' : 'EX_DIVIDEND',
              'D' : 'NEW'
            }
          },
  '293' : { name: 'DefBidSize', type: 'qty' },
  '294' : { name: 'DefOfferSize', type: 'qty' },
  '295' : { name: 'NoQuoteEntries', type: 'numingroup' },
  '296' : { name: 'NoQuoteSets', type: 'numingroup' },
  '297' : { name: 'QuoteStatus', type: 'int',
            enums: {
              '6' : 'REMOVED_FROM_MARKET',
              '1' : 'CANCELED_FOR_SYMBOL',
              '10' : 'PENDING',
              '9' : 'QUOTE_NOT_FOUND',
              '8' : 'QUERY',
              '7' : 'EXPIRED',
              '5' : 'REJECTED',
              '4' : 'CANCELED_ALL',
              '3' : 'CANCELED_FOR_UNDERLYING',
              '2' : 'CANCELED_FOR_SECURITY_TYPE',
              '0' : 'ACCEPTED'
            }
          },
  '298' : { name: 'QuoteCancelType', type: 'int',
            enums: {
              '4' : 'CANCEL_ALL_QUOTES',
              '2' : 'CANCEL_FOR_SECURITY_TYPE',
              '1' : 'CANCEL_FOR_SYMBOL',
              '3' : 'CANCEL_FOR_UNDERLYING_SYMBOL'
            }
          },
  '299' : { name: 'QuoteEntryID', type: 'string' },
  '300' : { name: 'QuoteRejectReason', type: 'int',
            enums: {
              '9' : 'NOT_AUTHORIZED_TO_QUOTE_SECURITY',
              '1' : 'UNKNOWN_SYMBOL',
              '2' : 'EXCHANGE',
              '3' : 'QUOTE_REQUEST_EXCEEDS_LIMIT',
              '4' : 'TOO_LATE_TO_ENTER',
              '5' : 'UNKNOWN_QUOTE',
              '6' : 'DUPLICATE_QUOTE',
              '7' : 'INVALID_BID_ASK_SPREAD',
              '8' : 'INVALID_PRICE'
            }
          },
  '301' : { name: 'QuoteResponseLevel', type: 'int',
            enums: {
              '1' : 'ACKNOWLEDGE_ONLY_NEGATIVE_OR_ERRONEOUS_QUOTES',
              '0' : 'NO_ACKNOWLEDGEMENT',
              '2' : 'ACKNOWLEDGE_EACH_QUOTE_MESSAGES'
            }
          },
  '302' : { name: 'QuoteSetID', type: 'string' },
  '303' : { name: 'QuoteRequestType', type: 'int',
            enums: {
              '2' : 'AUTOMATIC',
              '1' : 'MANUAL'
            }
          },
  '304' : { name: 'TotQuoteEntries', type: 'int' },
  '305' : { name: 'UnderlyingSecurityIDSource', type: 'string' },
  '306' : { name: 'UnderlyingIssuer', type: 'string' },
  '307' : { name: 'UnderlyingSecurityDesc', type: 'string' },
  '308' : { name: 'UnderlyingSecurityExchange', type: 'exchange' },
  '309' : { name: 'UnderlyingSecurityID', type: 'string' },
  '310' : { name: 'UnderlyingSecurityType', type: 'string' },
  '311' : { name: 'UnderlyingSymbol', type: 'string' },
  '312' : { name: 'UnderlyingSymbolSfx', type: 'string' },
  '313' : { name: 'UnderlyingMaturityMonthYear', type: 'monthyear' },
  '315' : { name: 'UnderlyingPutOrCall', type: 'int' },
  '316' : { name: 'UnderlyingStrikePrice', type: 'price' },
  '317' : { name: 'UnderlyingOptAttribute', type: 'char' },
  '320' : { name: 'SecurityReqID', type: 'string' },
  '321' : { name: 'SecurityRequestType', type: 'int',
            enums: {
              '0' : 'REQUEST_SECURITY_IDENTITY_AND_SPECIFICATIONS',
              '1' : 'REQUEST_SECURITY_IDENTITY_FOR_THE_SPECIFICATIONS_PROVIDED',
              '2' : 'REQUEST_LIST_SECURITY_TYPES',
              '3' : 'REQUEST_LIST_SECURITIES'
            }
          },
  '322' : { name: 'SecurityResponseID', type: 'string' },
  '323' : { name: 'SecurityResponseType', type: 'int',
            enums: {
              '5' : 'REJECT_SECURITY_PROPOSAL',
              '1' : 'ACCEPT_SECURITY_PROPOSAL_AS_IS',
              '6' : 'CAN_NOT_MATCH_SELECTION_CRITERIA',
              '2' : 'ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE',
              '4' : 'LIST_OF_SECURITIES_RETURNED_PER_REQUEST',
              '3' : 'LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST'
            }
          },
  '324' : { name: 'SecurityStatusReqID', type: 'string' },
  '325' : { name: 'UnsolicitedIndicator', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '326' : { name: 'SecurityTradingStatus', type: 'int',
            enums: {
              '20' : 'UNKNOWN_OR_INVALID',
              '13' : 'NO_MARKET_ON_CLOSE_IMBALANCE',
              '14' : 'ITS_PRE_OPENING',
              '15' : 'NEW_PRICE_INDICATION',
              '16' : 'TRADE_DISSEMINATION_TIME',
              '17' : 'READY_TO_TRADE',
              '19' : 'NOT_TRADED_ON_THIS_MARKET',
              '22' : 'OPENING_ROTATION',
              '21' : 'PRE_OPEN',
              '12' : 'NO_MARKET_IMBALANCE',
              '18' : 'NOT_AVAILABLE_FOR_TRADING',
              '10' : 'MARKET_ON_CLOSE_IMBALANCE_SELL',
              '9' : 'MARKET_ON_CLOSE_IMBALANCE_BUY',
              '8' : 'MARKET_IMBALANCE_SELL',
              '7' : 'MARKET_IMBALANCE_BUY',
              '6' : 'TRADING_RANGE_INDICATION',
              '5' : 'PRICE_INDICATION',
              '4' : 'NO_OPEN_NO_RESUME',
              '3' : 'RESUME',
              '1' : 'OPENING_DELAY',
              '2' : 'TRADING_HALT',
              '23' : 'FAST_MARKET'
            }
          },
  '327' : { name: 'HaltReasonChar', type: 'char',
            enums: {
              'X' : 'EQUIPMENT_CHANGEOVER',
              'M' : 'ADDITIONAL_INFORMATION',
              'E' : 'ORDER_INFLUX',
              'P' : 'NEWS_PENDING',
              'I' : 'ORDER_IMBALANCE',
              'D' : 'NEWS_DISSEMINATION'
            }
          },
  '328' : { name: 'InViewOfCommon', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '329' : { name: 'DueToRelated', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '330' : { name: 'BuyVolume', type: 'qty' },
  '331' : { name: 'SellVolume', type: 'qty' },
  '332' : { name: 'HighPx', type: 'price' },
  '333' : { name: 'LowPx', type: 'price' },
  '334' : { name: 'Adjustment', type: 'int',
            enums: {
              '1' : 'CANCEL',
              '2' : 'ERROR',
              '3' : 'CORRECTION'
            }
          },
  '335' : { name: 'TradSesReqID', type: 'string' },
  '336' : { name: 'TradingSessionID', type: 'string' },
  '337' : { name: 'ContraTrader', type: 'string' },
  '338' : { name: 'TradSesMethod', type: 'int',
            enums: {
              '3' : 'TWO_PARTY',
              '1' : 'ELECTRONIC',
              '2' : 'OPEN_OUTCRY'
            }
          },
  '339' : { name: 'TradSesMode', type: 'int',
            enums: {
              '3' : 'PRODUCTION',
              '1' : 'TESTING',
              '2' : 'SIMULATED'
            }
          },
  '340' : { name: 'TradSesStatus', type: 'int',
            enums: {
              '5' : 'PRE_CLOSE',
              '6' : 'REQUEST_REJECTED',
              '4' : 'PRE_OPEN',
              '3' : 'CLOSED',
              '2' : 'OPEN',
              '1' : 'HALTED',
              '0' : 'UNKNOWN'
            }
          },
  '341' : { name: 'TradSesStartTime', type: 'utctimestamp' },
  '342' : { name: 'TradSesOpenTime', type: 'utctimestamp' },
  '343' : { name: 'TradSesPreCloseTime', type: 'utctimestamp' },
  '344' : { name: 'TradSesCloseTime', type: 'utctimestamp' },
  '345' : { name: 'TradSesEndTime', type: 'utctimestamp' },
  '346' : { name: 'NumberOfOrders', type: 'int' },
  '347' : { name: 'MessageEncoding', type: 'string',
            enums: {
              'UTF-8' : 'UTF_8',
              'ISO-2022-JP' : 'ISO_2022_JP',
              'EUC-JP' : 'EUC_JP',
              'SHIFT_JIS' : 'SHIFT_JIS'
            }
          },
  '348' : { name: 'EncodedIssuerLen', type: 'length' },
  '349' : { name: 'EncodedIssuer', type: 'data' },
  '350' : { name: 'EncodedSecurityDescLen', type: 'length' },
  '351' : { name: 'EncodedSecurityDesc', type: 'data' },
  '352' : { name: 'EncodedListExecInstLen', type: 'length' },
  '353' : { name: 'EncodedListExecInst', type: 'data' },
  '354' : { name: 'EncodedTextLen', type: 'length' },
  '355' : { name: 'EncodedText', type: 'data' },
  '356' : { name: 'EncodedSubjectLen', type: 'length' },
  '357' : { name: 'EncodedSubject', type: 'data' },
  '358' : { name: 'EncodedHeadlineLen', type: 'length' },
  '359' : { name: 'EncodedHeadline', type: 'data' },
  '360' : { name: 'EncodedAllocTextLen', type: 'length' },
  '361' : { name: 'EncodedAllocText', type: 'data' },
  '362' : { name: 'EncodedUnderlyingIssuerLen', type: 'length' },
  '363' : { name: 'EncodedUnderlyingIssuer', type: 'data' },
  '364' : { name: 'EncodedUnderlyingSecurityDescLen', type: 'length' },
  '365' : { name: 'EncodedUnderlyingSecurityDesc', type: 'data' },
  '366' : { name: 'AllocPrice', type: 'price' },
  '367' : { name: 'QuoteSetValidUntilTime', type: 'utctimestamp' },
  '368' : { name: 'QuoteEntryRejectReason', type: 'int' },
  '369' : { name: 'LastMsgSeqNumProcessed', type: 'seqnum' },
  '370' : { name: 'OnBehalfOfSendingTime', type: 'utctimestamp' },
  '371' : { name: 'RefTagID', type: 'int' },
  '372' : { name: 'RefMsgType', type: 'string' },
  '373' : { name: 'SessionRejectReason', type: 'int',
            enums: {
              '12' : 'XML_VALIDATION_ERROR',
              '17' : 'NON_DATA_VALUE_INCLUDES_FIELD_DELIMITER',
              '16' : 'INCORRECT_NUMINGROUP_COUNT_FOR_REPEATING_GROUP',
              '15' : 'REPEATING_GROUP_FIELDS_OUT_OF_ORDER',
              '14' : 'TAG_SPECIFIED_OUT_OF_REQUIRED_ORDER',
              '11' : 'INVALID_MSGTYPE',
              '0' : 'INVALID_TAG_NUMBER',
              '9' : 'COMPID_PROBLEM',
              '8' : 'SIGNATURE_PROBLEM',
              '7' : 'DECRYPTION_PROBLEM',
              '6' : 'INCORRECT_DATA_FORMAT_FOR_VALUE',
              '5' : 'VALUE_IS_INCORRECT',
              '4' : 'TAG_SPECIFIED_WITHOUT_A_VALUE',
              '3' : 'UNDEFINED_TAG',
              '10' : 'SENDINGTIME_ACCURACY_PROBLEM',
              '13' : 'TAG_APPEARS_MORE_THAN_ONCE',
              '2' : 'TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE',
              '1' : 'REQUIRED_TAG_MISSING'
            }
          },
  '374' : { name: 'BidRequestTransType', type: 'char',
            enums: {
              'N' : 'NEW',
              'C' : 'CANCEL'
            }
          },
  '375' : { name: 'ContraBroker', type: 'string' },
  '376' : { name: 'ComplianceID', type: 'string' },
  '377' : { name: 'SolicitedFlag', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '378' : { name: 'ExecRestatementReason', type: 'int',
            enums: {
              '7' : 'CANCEL_ON_SYSTEM_FAILURE',
              '0' : 'GT_CORPORATE_ACTION',
              '8' : 'MARKET',
              '6' : 'CANCEL_ON_TRADING_HALT',
              '5' : 'PARTIAL_DECLINE_OF_ORDERQTY',
              '4' : 'BROKER_OPTION',
              '3' : 'REPRICING_OF_ORDER',
              '1' : 'GT_RENEWAL',
              '2' : 'VERBAL_CHANGE'
            }
          },
  '379' : { name: 'BusinessRejectRefID', type: 'string' },
  '380' : { name: 'BusinessRejectReason', type: 'int',
            enums: {
              '3' : 'UNSUPPORTED_MESSAGE_TYPE',
              '7' : 'DELIVERTO_FIRM_NOT_AVAILABLE_AT_THIS_TIME',
              '4' : 'APPLICATION_NOT_AVAILABLE',
              '6' : 'NOT_AUTHORIZED',
              '0' : 'OTHER',
              '5' : 'CONDITIONALLY_REQUIRED_FIELD_MISSING',
              '1' : 'UNKOWN_ID',
              '2' : 'UNKNOWN_SECURITY'
            }
          },
  '381' : { name: 'GrossTradeAmt', type: 'amt' },
  '382' : { name: 'NoContraBrokers', type: 'numingroup' },
  '383' : { name: 'MaxMessageSize', type: 'length' },
  '384' : { name: 'NoMsgTypes', type: 'numingroup' },
  '385' : { name: 'MsgDirection', type: 'char',
            enums: {
              'S' : 'SEND',
              'R' : 'RECEIVE'
            }
          },
  '386' : { name: 'NoTradingSessions', type: 'numingroup' },
  '387' : { name: 'TotalVolumeTraded', type: 'qty' },
  '388' : { name: 'DiscretionInst', type: 'char',
            enums: {
              '0' : 'RELATED_TO_DISPLAYED_PRICE',
              '1' : 'RELATED_TO_MARKET_PRICE',
              '2' : 'RELATED_TO_PRIMARY_PRICE',
              '3' : 'RELATED_TO_LOCAL_PRIMARY_PRICE',
              '4' : 'RELATED_TO_MIDPOINT_PRICE',
              '5' : 'RELATED_TO_LAST_TRADE_PRICE'
            }
          },
  '389' : { name: 'DiscretionOffset', type: 'priceoffset' },
  '390' : { name: 'BidID', type: 'string' },
  '391' : { name: 'ClientBidID', type: 'string' },
  '392' : { name: 'ListName', type: 'string' },
  '393' : { name: 'TotalNumSecurities', type: 'int' },
  '394' : { name: 'BidType', type: 'int',
            enums: {
              '1' : 'NON_DISCLOSED_STYLE',
              '2' : 'DISCLOSED_STYLE',
              '3' : 'NO_BIDDING_PROCESS'
            }
          },
  '395' : { name: 'NumTickets', type: 'int' },
  '396' : { name: 'SideValue1', type: 'amt' },
  '397' : { name: 'SideValue2', type: 'amt' },
  '398' : { name: 'NoBidDescriptors', type: 'numingroup' },
  '399' : { name: 'BidDescriptorType', type: 'int',
            enums: {
              '3' : 'INDEX',
              '2' : 'COUNTRY',
              '1' : 'SECTOR'
            }
          },
  '400' : { name: 'BidDescriptor', type: 'string' },
  '401' : { name: 'SideValueInd', type: 'int',
            enums: {
              '1' : 'SIDEVALUE1',
              '2' : 'SIDEVALUE_2'
            }
          },
  '402' : { name: 'LiquidityPctLow', type: 'percentage' },
  '403' : { name: 'LiquidityPctHigh', type: 'percentage' },
  '404' : { name: 'LiquidityValue', type: 'amt' },
  '405' : { name: 'EFPTrackingError', type: 'percentage' },
  '406' : { name: 'FairValue', type: 'amt' },
  '407' : { name: 'OutsideIndexPct', type: 'percentage' },
  '408' : { name: 'ValueOfFutures', type: 'amt' },
  '409' : { name: 'LiquidityIndType', type: 'int',
            enums: {
              '3' : 'NORMAL_MARKET_SIZE',
              '4' : 'OTHER',
              '2' : '20_DAY_MOVING_AVERAGE',
              '1' : '5DAY_MOVING_AVERAGE'
            }
          },
  '410' : { name: 'WtAverageLiquidity', type: 'percentage' },
  '411' : { name: 'ExchangeForPhysical', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '412' : { name: 'OutMainCntryUIndex', type: 'amt' },
  '413' : { name: 'CrossPercent', type: 'percentage' },
  '414' : { name: 'ProgRptReqs', type: 'int',
            enums: {
              '3' : 'REAL_TIME_EXECUTION_REPORTS',
              '2' : 'SELLSIDE_PERIODICALLY_SENDS_STATUS_USING_LISTSTATUS_PERIOD_OPTIONALLY_SPECIFIED_IN_PROGRESSPERIOD',
              '1' : 'BUYSIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUSREQUEST'
            }
          },
  '415' : { name: 'ProgPeriodInterval', type: 'int' },
  '416' : { name: 'IncTaxInd', type: 'int',
            enums: {
              '2' : 'GROSS',
              '1' : 'NET'
            }
          },
  '417' : { name: 'NumBidders', type: 'int' },
  '418' : { name: 'TradeType', type: 'char',
            enums: {
              'G' : 'VWAP_GUARANTEE',
              'A' : 'AGENCY',
              'J' : 'GUARANTEED_CLOSE',
              'R' : 'RISK_TRADE'
            }
          },
  '419' : { name: 'BasisPxType', type: 'char',
            enums: {
              '8' : 'VWAP_THROUGH_AN_AFTERNOON_SESSION',
              'D' : 'OPEN',
              'Z' : 'OTHERS',
              'C' : 'STRIKE',
              'B' : 'VWAP_THROUGH_AN_AFTERNOON_SESSION_EXCEPT_YORI',
              '9' : 'VWAP_THROUGH_A_DAY_EXCEPT_YORI',
              '7' : 'VWAP_THROUGH_A_MORNING_SESSION',
              '6' : 'VWAP_THROUGH_A_DAY',
              '5' : 'SQ',
              '4' : 'CURRENT_PRICE',
              '3' : 'CLOSING_PRICE',
              '2' : 'CLOSING_PRICE_AT_MORNING_SESSION',
              'A' : 'VWAP_THROUGH_A_MORNING_SESSION_EXCEPT_YORI'
            }
          },
  '420' : { name: 'NoBidComponents', type: 'numingroup' },
  '421' : { name: 'Country', type: 'country' },
  '422' : { name: 'TotNoStrikes', type: 'int' },
  '423' : { name: 'PriceType', type: 'int',
            enums: {
              '3' : 'FIXED_AMOUNT',
              '1' : 'PERCENTAGE',
              '4' : 'DISCOUNT',
              '6' : 'BASIS_POINTS_RELATIVE_TO_BENCHMARK',
              '7' : 'TED_PRICE',
              '8' : 'TED_YIELD',
              '5' : 'PREMIUM',
              '2' : 'PER_SHARE'
            }
          },
  '424' : { name: 'DayOrderQty', type: 'qty' },
  '425' : { name: 'DayCumQty', type: 'qty' },
  '426' : { name: 'DayAvgPx', type: 'price' },
  '427' : { name: 'GTBookingInst', type: 'int',
            enums: {
              '0' : 'BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION',
              '2' : 'ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE',
              '1' : 'ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES'
            }
          },
  '428' : { name: 'NoStrikes', type: 'numingroup' },
  '429' : { name: 'ListStatusType', type: 'int',
            enums: {
              '6' : 'ALERT',
              '4' : 'EXECSTARTED',
              '3' : 'TIMED',
              '2' : 'RESPONSE',
              '1' : 'ACK',
              '5' : 'ALLDONE'
            }
          },
  '430' : { name: 'NetGrossInd', type: 'int',
            enums: {
              '1' : 'NET',
              '2' : 'GROSS'
            }
          },
  '431' : { name: 'ListOrderStatus', type: 'int',
            enums: {
              '4' : 'CANCELING',
              '3' : 'EXECUTING',
              '7' : 'REJECT',
              '6' : 'ALL_DONE',
              '5' : 'ALERT',
              '2' : 'RECEIVEDFOREXECUTION',
              '1' : 'INBIDDINGPROCESS'
            }
          },
  '432' : { name: 'ExpireDate', type: 'localmktdate' },
  '433' : { name: 'ListExecInstType', type: 'char',
            enums: {
              '5' : 'EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_WITHDRAW',
              '4' : 'EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_TOP_UP',
              '2' : 'WAIT_FOR_EXECUTE_INSTRUCTION',
              '1' : 'IMMEDIATE',
              '3' : 'EXCHANGE_SWITCH_CIV_ORDER_SELL_DRIVEN'
            }
          },
  '434' : { name: 'CxlRejResponseTo', type: 'char',
            enums: {
              '2' : 'ORDER_CANCEL_REPLACE_REQUEST',
              '1' : 'ORDER_CANCEL_REQUEST'
            }
          },
  '435' : { name: 'UnderlyingCouponRate', type: 'percentage' },
  '436' : { name: 'UnderlyingContractMultiplier', type: 'float' },
  '437' : { name: 'ContraTradeQty', type: 'qty' },
  '438' : { name: 'ContraTradeTime', type: 'utctimestamp' },
  '441' : { name: 'LiquidityNumSecurities', type: 'int' },
  '442' : { name: 'MultiLegReportingType', type: 'char',
            enums: {
              '1' : 'SINGLE_SECURITY',
              '2' : 'INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY',
              '3' : 'MULTI_LEG_SECURITY'
            }
          },
  '443' : { name: 'StrikeTime', type: 'utctimestamp' },
  '444' : { name: 'ListStatusText', type: 'string' },
  '445' : { name: 'EncodedListStatusTextLen', type: 'length' },
  '446' : { name: 'EncodedListStatusText', type: 'data' },
  '447' : { name: 'PartyIDSource', type: 'char',
            enums: {
              '5' : 'CHINESE_B_SHARE',
              '8' : 'US_EMPLOYER_IDENTIFICATION_NUMBER',
              'A' : 'AUSTRALIAN_TAX_FILE_NUMBER',
              '9' : 'AUSTRALIAN_BUSINESS_NUMBER',
              'E' : 'ISO_COUNTRY_CODE',
              'B' : 'BIC',
              '7' : 'US_SOCIAL_SECURITY_NUMBER',
              'D' : 'PROPRIETARY_CUSTOM_CODE',
              'F' : 'SETTLEMENT_ENTITY_LOCATION',
              '1' : 'KOREAN_INVESTOR_ID',
              '2' : 'TAIWANESE_QUALIFIED_FOREIGN_INVESTOR_ID_QFII',
              '3' : 'TAIWANESE_TRADING_ACCOUNT',
              '4' : 'MALAYSIAN_CENTRAL_DEPOSITORY',
              '6' : 'UK_NATIONAL_INSURANCE_OR_PENSION_NUMBER',
              'C' : 'GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER'
            }
          },
  '448' : { name: 'PartyID', type: 'string' },
  '449' : { name: 'TotalVolumeTradedDate', type: 'utcdate' },
  '450' : { name: 'TotalVolumeTradedTime', type: 'utctimeonly' },
  '451' : { name: 'NetChgPrevDay', type: 'priceoffset' },
  '452' : { name: 'PartyRole', type: 'int',
            enums: {
              '15' : 'CORRESPONDANT_CLEARING_FIRM',
              '3' : 'CLIENT_ID',
              '20' : 'UNDERLYING_CONTRA_FIRM',
              '19' : 'SPONSORING_FIRM',
              '18' : 'CONTRA_CLEARING_FIRM',
              '17' : 'CONTRA_FIRM',
              '16' : 'EXECUTING_SYSTEM',
              '7' : 'ENTERING_FIRM',
              '1' : 'EXECUTING_FIRM',
              '2' : 'BROKER_OF_CREDIT',
              '5' : 'INVESTOR_ID',
              '6' : 'INTRODUCING_FIRM',
              '14' : 'GIVEUP_CLEARING_FIRM',
              '8' : 'LOCATE_LENDING_FIRM',
              '9' : 'FUND_MANAGER_CLIENT_ID',
              '10' : 'SETTLEMENT_LOCATION',
              '11' : 'ORDER_ORIGINATION_TRADER',
              '12' : 'EXECUTING_TRADER',
              '13' : 'ORDER_ORIGINATION_FIRM',
              '4' : 'CLEARING_FIRM'
            }
          },
  '453' : { name: 'NoPartyIDs', type: 'numingroup' },
  '454' : { name: 'NoSecurityAltID', type: 'numingroup' },
  '455' : { name: 'SecurityAltID', type: 'string' },
  '456' : { name: 'SecurityAltIDSource', type: 'string' },
  '457' : { name: 'NoUnderlyingSecurityAltID', type: 'numingroup' },
  '458' : { name: 'UnderlyingSecurityAltID', type: 'string' },
  '459' : { name: 'UnderlyingSecurityAltIDSource', type: 'string' },
  '460' : { name: 'Product', type: 'int',
            enums: {
              '8' : 'LOAN',
              '12' : 'OTHER',
              '11' : 'MUNICIPAL',
              '1' : 'AGENCY',
              '3' : 'CORPORATE',
              '4' : 'CURRENCY',
              '2' : 'COMMODITY',
              '6' : 'GOVERNMENT',
              '10' : 'MORTGAGE',
              '7' : 'INDEX',
              '9' : 'MONEYMARKET',
              '5' : 'EQUITY'
            }
          },
  '461' : { name: 'CFICode', type: 'string' },
  '462' : { name: 'UnderlyingProduct', type: 'int' },
  '463' : { name: 'UnderlyingCFICode', type: 'string' },
  '464' : { name: 'TestMessageIndicator', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '465' : { name: 'QuantityType', type: 'int',
            enums: {
              '6' : 'CONTRACTS',
              '7' : 'OTHER',
              '5' : 'CURRENCY',
              '4' : 'ORIGINALFACE',
              '3' : 'CURRENTFACE',
              '2' : 'BONDS',
              '1' : 'SHARES',
              '8' : 'PAR'
            }
          },
  '466' : { name: 'BookingRefID', type: 'string' },
  '467' : { name: 'IndividualAllocID', type: 'string' },
  '468' : { name: 'RoundingDirection', type: 'char',
            enums: {
              '0' : 'ROUND_TO_NEAREST',
              '1' : 'ROUND_DOWN',
              '2' : 'ROUND_UP'
            }
          },
  '469' : { name: 'RoundingModulus', type: 'float' },
  '470' : { name: 'CountryOfIssue', type: 'country' },
  '471' : { name: 'StateOrProvinceOfIssue', type: 'string' },
  '472' : { name: 'LocaleOfIssue', type: 'string' },
  '473' : { name: 'NoRegistDtls', type: 'numingroup' },
  '474' : { name: 'MailingDtls', type: 'string' },
  '475' : { name: 'InvestorCountryOfResidence', type: 'country' },
  '476' : { name: 'PaymentRef', type: 'string' },
  '477' : { name: 'DistribPaymentMethod', type: 'int' },
  '478' : { name: 'CashDistribCurr', type: 'currency' },
  '479' : { name: 'CommCurrency', type: 'currency' },
  '480' : { name: 'CancellationRights', type: 'char',
            enums: {
              'M' : 'NO_WAIVER_AGREEMENT',
              'N' : 'NO_EXECUTION_ONLY',
              'Y' : 'YES',
              'O' : 'NO_INSTITUTIONAL'
            }
          },
  '481' : { name: 'MoneyLaunderingStatus', type: 'char',
            enums: {
              '3' : 'EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION',
              '2' : 'EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION',
              '1' : 'EXEMPT_BELOW_THE_LIMIT',
              'Y' : 'PASSED',
              'N' : 'NOT_CHECKED'
            }
          },
  '482' : { name: 'MailingInst', type: 'string' },
  '483' : { name: 'TransBkdTime', type: 'utctimestamp' },
  '484' : { name: 'ExecPriceType', type: 'char',
            enums: {
              'S' : 'SINGLE_PRICE',
              'Q' : 'OFFER_PRICE_MINUS_ADJUSTMENT_AMOUNT',
              'P' : 'OFFER_PRICE_MINUS_ADJUSTMENT',
              'O' : 'OFFER_PRICE',
              'E' : 'CREATION_PRICE_PLUS_ADJUSTMENT_AMOUNT',
              'D' : 'CREATION_PRICE_PLUS_ADJUSTMENT',
              'C' : 'CREATION_PRICE',
              'B' : 'BID_PRICE'
            }
          },
  '485' : { name: 'ExecPriceAdjustment', type: 'float' },
  '486' : { name: 'DateOfBirth', type: 'localmktdate' },
  '487' : { name: 'TradeReportTransType', type: 'char',
            enums: {
              'N' : 'NEW',
              'R' : 'REPLACE',
              'C' : 'CANCEL'
            }
          },
  '488' : { name: 'CardHolderName', type: 'string' },
  '489' : { name: 'CardNumber', type: 'string' },
  '490' : { name: 'CardExpDate', type: 'localmktdate' },
  '491' : { name: 'CardIssNo', type: 'string' },
  '492' : { name: 'PaymentMethod', type: 'int',
            enums: {
              '14' : 'BPAY',
              '13' : 'ACH_CREDIT',
              '12' : 'ACH_DEBIT',
              '11' : 'CREDIT_CARD',
              '10' : 'DIRECT_CREDIT',
              '9' : 'DIRECT_DEBIT',
              '8' : 'DEBIT_CARD',
              '7' : 'FEDWIRE',
              '15' : 'HIGH_VALUE_CLEARING_SYSTEM',
              '3' : 'EUROCLEAR',
              '6' : 'TELEGRAPHIC_TRANSFER',
              '4' : 'CLEARSTREAM',
              '1' : 'CREST',
              '2' : 'NSCC',
              '5' : 'CHEQUE'
            }
          },
  '493' : { name: 'RegistAcctType', type: 'string' },
  '494' : { name: 'Designation', type: 'string' },
  '495' : { name: 'TaxAdvantageType', type: 'int',
            enums: {
              '19' : 'PROFIT_SHARING_PLAN',
              '11' : 'EMPLOYER',
              '12' : 'EMPLOYER_CURRENT_YEAR',
              '13' : 'NON_FUND_PROTOTYPE_IRA',
              '14' : 'NON_FUND_QUALIFIED_PLAN',
              '15' : 'DEFINED_CONTRIBUTION_PLAN',
              '10' : 'EMPLOYEE_CURRENT_YEAR',
              '17' : 'INDIVIDUAL_RETIREMENT_ACCOUNT_ROLLOVER',
              '5' : 'MINI_INSURANCE_ISA',
              '16' : 'INDIVIDUAL_RETIREMENT_ACCOUNT',
              '9' : 'EMPLOYEE',
              '8' : 'ASSET_TRANSFER',
              '21' : 'SELF_DIRECTED_IRA',
              '6' : 'CURRENT_YEAR_PAYMENT',
              '20' : '401K',
              '4' : 'MINI_STOCKS_AND_SHARES_ISA',
              '3' : 'MINI_CASH_ISA',
              '2' : 'TESSA',
              '1' : 'MAXI_ISA',
              '0' : 'NONE_NOT_APPLICABLE',
              '7' : 'PRIOR_YEAR_PAYMENT',
              '23' : '457',
              '24' : 'ROTH_IRA_24',
              '25' : 'ROTH_IRA_25',
              '26' : 'ROTH_CONVERSION_IRA_26',
              '27' : 'ROTH_CONVERSION_IRA_27',
              '28' : 'EDUCATION_IRA_28',
              '29' : 'EDUCATION_IRA_29',
              '18' : 'KEOGH',
              '22' : '403'
            }
          },
  '496' : { name: 'RegistRejReasonText', type: 'string' },
  '497' : { name: 'FundRenewWaiv', type: 'char',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '498' : { name: 'CashDistribAgentName', type: 'string' },
  '499' : { name: 'CashDistribAgentCode', type: 'string' },
  '500' : { name: 'CashDistribAgentAcctNumber', type: 'string' },
  '501' : { name: 'CashDistribPayRef', type: 'string' },
  '503' : { name: 'CardStartDate', type: 'localmktdate' },
  '504' : { name: 'PaymentDate', type: 'localmktdate' },
  '505' : { name: 'PaymentRemitterID', type: 'string' },
  '506' : { name: 'RegistStatus', type: 'char',
            enums: {
              'A' : 'ACCEPT',
              'N' : 'REMINDER',
              'R' : 'REJECT',
              'H' : 'HELD'
            }
          },
  '507' : { name: 'RegistRejReasonCode', type: 'int',
            enums: {
              '13' : 'INVALID_UNACCEPTABLE_NODISTRIBINSTNS',
              '17' : 'INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_CODE',
              '16' : 'INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NAME',
              '4' : 'INVALID_UNACCEPTABLE_NO_REG_DETLS',
              '15' : 'INVALID_UNACCEPTABLE_DISTRIB_PAYMENT_METHOD',
              '14' : 'INVALID_UNACCEPTABLE_DISTRIB_PERCENTAGE',
              '3' : 'INVALID_UNACCEPTABLE_OWNERSHIP_TYPE',
              '2' : 'INVALID_UNACCEPTABLE_TAX_EXEMPT_TYPE',
              '12' : 'INVALID_UNACCEPTABLE_INVESTOR_COUNTRY_OF_RESIDENCE',
              '11' : 'INVALID_UNACCEPTABLE_DATE_OF_BIRTH',
              '10' : 'INVALID_UNACCEPTABLE_INVESTOR_ID_SOURCE',
              '9' : 'INVALID_UNACCEPTABLE_INVESTOR_ID',
              '8' : 'INVALID_UNACCEPTABLE_MAILING_INST',
              '7' : 'INVALID_UNACCEPTABLE_MAILING_DTLS',
              '5' : 'INVALID_UNACCEPTABLE_REG_SEQ_NO',
              '1' : 'INVALID_UNACCEPTABLE_ACCOUNT_TYPE',
              '18' : 'INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NUM',
              '6' : 'INVALID_UNACCEPTABLE_REG_DTLS'
            }
          },
  '508' : { name: 'RegistRefID', type: 'string' },
  '509' : { name: 'RegistDetls', type: 'string' },
  '510' : { name: 'NoDistribInsts', type: 'numingroup' },
  '511' : { name: 'RegistEmail', type: 'string' },
  '512' : { name: 'DistribPercentage', type: 'percentage' },
  '513' : { name: 'RegistID', type: 'string' },
  '514' : { name: 'RegistTransType', type: 'char',
            enums: {
              '2' : 'CANCEL',
              '0' : 'NEW',
              '1' : 'REPLACE'
            }
          },
  '515' : { name: 'ExecValuationPoint', type: 'utctimestamp' },
  '516' : { name: 'OrderPercent', type: 'percentage' },
  '517' : { name: 'OwnershipType', type: 'char' },
  '518' : { name: 'NoContAmts', type: 'numingroup' },
  '519' : { name: 'ContAmtType', type: 'int',
            enums: {
              '15' : 'NET_SETTLEMENT_AMOUNT',
              '1' : 'COMMISSION_AMOUNT',
              '2' : 'COMMISSION',
              '3' : 'INITIAL_CHARGE_AMOUNT',
              '4' : 'INITIAL_CHARGE',
              '5' : 'DISCOUNT_AMOUNT',
              '6' : 'DISCOUNT',
              '7' : 'DILUTION_LEVY_AMOUNT',
              '8' : 'DILUTION_LEVY',
              '9' : 'EXIT_CHARGE_AMOUNT',
              '10' : 'EXIT_CHARGE',
              '11' : 'FUND_BASED_RENEWAL_COMMISSION',
              '12' : 'PROJECTED_FUND_VALUE',
              '14' : 'FUND_BASED_RENEWAL_COMMISSION_AMOUNT_14',
              '13' : 'FUND_BASED_RENEWAL_COMMISSION_AMOUNT_13'
            }
          },
  '520' : { name: 'ContAmtValue', type: 'float' },
  '521' : { name: 'ContAmtCurr', type: 'currency' },
  '522' : { name: 'OwnerType', type: 'int',
            enums: {
              '5' : 'COMPANY_TRUSTEE',
              '13' : 'NOMINEE',
              '12' : 'CORPORATE_BODY',
              '11' : 'NON_PROFIT_ORGANIZATION',
              '10' : 'NETWORKING_SUB_ACCOUNT',
              '9' : 'FIDUCIARIES',
              '8' : 'TRUSTS',
              '6' : 'PENSION_PLAN',
              '4' : 'INDIVIDUAL_TRUSTEE',
              '2' : 'PUBLIC_COMPANY',
              '3' : 'PRIVATE_COMPANY',
              '1' : 'INDIVIDUAL_INVESTOR',
              '7' : 'CUSTODIAN_UNDER_GIFTS_TO_MINORS_ACT'
            }
          },
  '523' : { name: 'PartySubID', type: 'string' },
  '524' : { name: 'NestedPartyID', type: 'string' },
  '525' : { name: 'NestedPartyIDSource', type: 'char' },
  '526' : { name: 'SecondaryClOrdID', type: 'string' },
  '527' : { name: 'SecondaryExecID', type: 'string' },
  '528' : { name: 'OrderCapacity', type: 'char',
            enums: {
              'R' : 'RISKLESS_PRINCIPAL',
              'I' : 'INDIVIDUAL',
              'P' : 'PRINCIPAL',
              'W' : 'AGENT_FOR_OTHER_MEMBER',
              'A' : 'AGENCY',
              'G' : 'PROPRIETARY'
            }
          },
  '529' : { name: 'OrderRestrictions', type: 'multiplevaluestring',
            enums: {
              '7' : 'FOREIGN_ENTITY',
              'A' : 'RISKLESS_ARBITRAGE',
              '1' : 'PROGRAM_TRADE',
              '8' : 'EXTERNAL_MARKET_PARTICIPANT',
              '6' : 'ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY',
              '5' : 'ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY',
              '3' : 'NON_INDEX_ARBITRAGE',
              '2' : 'INDEX_ARBITRAGE',
              '4' : 'COMPETING_MARKET_MAKER',
              '9' : 'EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE'
            }
          },
  '530' : { name: 'MassCancelRequestType', type: 'char',
            enums: {
              '1' : 'CANCEL_ORDERS_FOR_A_SECURITY',
              '7' : 'CANCEL_ALL_ORDERS',
              '6' : 'CANCEL_ORDERS_FOR_A_TRADING_SESSION',
              '5' : 'CANCEL_ORDERS_FOR_A_SECURITYTYPE',
              '4' : 'CANCEL_ORDERS_FOR_A_CFICODE',
              '2' : 'CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY',
              '3' : 'CANCEL_ORDERS_FOR_A_PRODUCT'
            }
          },
  '531' : { name: 'MassCancelResponse', type: 'char',
            enums: {
              '6' : 'CANCEL_ORDERS_FOR_A_TRADING_SESSION',
              '0' : 'CANCEL_REQUEST_REJECTED',
              '7' : 'CANCEL_ALL_ORDERS',
              '3' : 'CANCEL_ORDERS_FOR_A_PRODUCT',
              '5' : 'CANCEL_ORDERS_FOR_A_SECURITYTYPE',
              '4' : 'CANCEL_ORDERS_FOR_A_CFICODE',
              '1' : 'CANCEL_ORDERS_FOR_A_SECURITY',
              '2' : 'CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY'
            }
          },
  '532' : { name: 'MassCancelRejectReason', type: 'char',
            enums: {
              '2' : 'INVALID_OR_UNKNOWN_UNDERLYING',
              '6' : 'INVALID_OR_UNKNOWN_TRADING_SESSION',
              '5' : 'INVALID_OR_UNKNOWN_SECURITY_TYPE',
              '3' : 'INVALID_OR_UNKNOWN_PRODUCT',
              '1' : 'INVALID_OR_UNKNOWN_SECURITY',
              '0' : 'MASS_CANCEL_NOT_SUPPORTED',
              '4' : 'INVALID_OR_UNKNOWN_CFICODE'
            }
          },
  '533' : { name: 'TotalAffectedOrders', type: 'int' },
  '534' : { name: 'NoAffectedOrders', type: 'numingroup' },
  '535' : { name: 'AffectedOrderID', type: 'string' },
  '536' : { name: 'AffectedSecondaryOrderID', type: 'string' },
  '537' : { name: 'QuoteType', type: 'int',
            enums: {
              '0' : 'INDICATIVE',
              '1' : 'TRADEABLE',
              '2' : 'RESTRICTED_TRADEABLE'
            }
          },
  '538' : { name: 'NestedPartyRole', type: 'int' },
  '539' : { name: 'NoNestedPartyIDs', type: 'numingroup' },
  '540' : { name: 'TotalAccruedInterestAmt', type: 'amt' },
  '541' : { name: 'MaturityDate', type: 'localmktdate' },
  '542' : { name: 'UnderlyingMaturityDate', type: 'localmktdate' },
  '543' : { name: 'InstrRegistry', type: 'string' },
  '544' : { name: 'CashMargin', type: 'char',
            enums: {
              '2' : 'MARGIN_OPEN',
              '3' : 'MARGIN_CLOSE',
              '1' : 'CASH'
            }
          },
  '545' : { name: 'NestedPartySubID', type: 'string' },
  '546' : { name: 'Scope', type: 'multiplevaluestring',
            enums: {
              '1' : 'LOCAL',
              '2' : 'NATIONAL',
              '3' : 'GLOBAL'
            }
          },
  '547' : { name: 'MDImplicitDelete', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '548' : { name: 'CrossID', type: 'string' },
  '549' : { name: 'CrossType', type: 'int',
            enums: {
              '1' : 'CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT_BOTH_SIDES_ARE_TREATED_IN_THE_SAME_MANNER_THIS_IS_EQUIVALENT_TO_AN_ALL_OR_NONE',
              '2' : 'CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED_ONE_SIDE_IS_FULLY_EXECUTED_THE_OTHER_SIDE_IS_PARTIALLY_EXECUTED_WITH_THE_REMAINDER_BEING_CANCELLED_THIS_IS_EQUIVALENT_TO_AN_IMMEDIATE_OR_CANCEL_ON_THE_OTHER_SIDE',
              '3' : 'CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE_ONE_SIDE_OF_THE_CROSS_IS_FULLY_EXECUTED',
              '4' : 'CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE'
            }
          },
  '550' : { name: 'CrossPrioritization', type: 'int',
            enums: {
              '2' : 'SELLSIDE_PRIORITIZED',
              '0' : 'NONE',
              '1' : 'BUYSIDE_PRIORITIZED'
            }
          },
  '551' : { name: 'OrigCrossID', type: 'string' },
  '552' : { name: 'NoSides', type: 'numingroup',
            enums: {
              '1' : 'ONE_SIDE',
              '2' : 'BOTH_SIDES'
            }
          },
  '553' : { name: 'Username', type: 'string' },
  '554' : { name: 'Password', type: 'string' },
  '555' : { name: 'NoLegs', type: 'numingroup' },
  '556' : { name: 'LegCurrency', type: 'currency' },
  '557' : { name: 'TotalNumSecurityTypes', type: 'int' },
  '558' : { name: 'NoSecurityTypes', type: 'numingroup' },
  '559' : { name: 'SecurityListRequestType', type: 'int',
            enums: {
              '1' : 'SECURITYTYPE_AND_OR_CFICODE',
              '2' : 'PRODUCT',
              '3' : 'TRADINGSESSIONID',
              '4' : 'ALL_SECURITIES',
              '0' : 'SYMBOL'
            }
          },
  '560' : { name: 'SecurityRequestResult', type: 'int',
            enums: {
              '4' : 'INSTRUMENT_DATA_TEMPORARILY_UNAVAILABLE',
              '0' : 'VALID_REQUEST',
              '1' : 'INVALID_OR_UNSUPPORTED_REQUEST',
              '5' : 'REQUEST_FOR_INSTRUMENT_DATA_NOT_SUPPORTED',
              '3' : 'NOT_AUTHORIZED_TO_RETRIEVE_INSTRUMENT_DATA',
              '2' : 'NO_INSTRUMENTS_FOUND_THAT_MATCH_SELECTION_CRITERIA'
            }
          },
  '561' : { name: 'RoundLot', type: 'qty' },
  '562' : { name: 'MinTradeVol', type: 'qty' },
  '563' : { name: 'MultiLegRptTypeReq', type: 'int' },
  '564' : { name: 'LegPositionEffect', type: 'char' },
  '565' : { name: 'LegCoveredOrUncovered', type: 'int' },
  '566' : { name: 'LegPrice', type: 'price' },
  '567' : { name: 'TradSesStatusRejReason', type: 'int',
            enums: {
              '1' : 'UNKNOWN_OR_INVALID_TRADINGSESSIONID'
            }
          },
  '568' : { name: 'TradeRequestID', type: 'string' },
  '569' : { name: 'TradeRequestType', type: 'int',
            enums: {
              '4' : 'ADVISORIES_THAT_MATCH_CRITERIA',
              '3' : 'UNREPORTED_TRADES_THAT_MATCH_CRITERIA',
              '2' : 'UNMATCHED_TRADES_THAT_MATCH_CRITERIA',
              '1' : 'MATCHED_TRADES_MATCHING_CRITERIA_PROVIDED_ON_REQUEST',
              '0' : 'ALL_TRADES'
            }
          },
  '570' : { name: 'PreviouslyReported', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '571' : { name: 'TradeReportID', type: 'string' },
  '572' : { name: 'TradeReportRefID', type: 'string' },
  '573' : { name: 'MatchStatus', type: 'char',
            enums: {
              '0' : 'COMPARED_MATCHED_OR_AFFIRMED',
              '1' : 'UNCOMPARED_UNMATCHED_OR_UNAFFIRMED',
              '2' : 'ADVISORY_OR_ALERT'
            }
          },
  '574' : { name: 'MatchType', type: 'string',
            enums: {
              'S5' : 'SUMMARIZED_MATCH_USING_A1_TO_A5_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED_S5',
              'M1' : 'ACT_M1_MATCH',
              'M6' : 'ACT_M6_MATCH',
              'M5' : 'ACT_DEFAULT_AFTER_M2',
              'M3' : 'ACT_ACCEPTED_TRADE',
              'S2' : 'SUMMARIZED_MATCH_USING_A1_TO_A5_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED_S2',
              'S3' : 'SUMMARIZED_MATCH_USING_A1_TO_A5_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED_S3',
              'S4' : 'SUMMARIZED_MATCH_USING_A1_TO_A5_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED_S4',
              'M2' : 'ACT_M2_MATCH',
              'A2' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_FOUR_BADGES',
              'A3' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_TWO_BADGES_AND_EXECUTION_TIME',
              'A4' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND',
              'AQ' : 'COMPARED_RECORDS_RESULTING_FROM_STAMPED_ADVISORIES_OR_SPECIALIST',
              'MT' : 'NON_ACT',
              'M4' : 'ACT_DEFAULT_TRADE',
              'A1' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_FOUR_BADGES_AND_EXECUTION_TIME',
              'S1' : 'SUMMARIZED_MATCH_USING_A1_TO_A5_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED_S1',
              'A5' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_EXECUTION_TIME'
            }
          },
  '575' : { name: 'OddLot', type: 'boolean' },
  '576' : { name: 'NoClearingInstructions', type: 'int' },
  '577' : { name: 'ClearingInstruction', type: 'int',
            enums: {
              '8' : 'MANUAL_MODE',
              '5' : 'MULTILATERAL_NETTING',
              '9' : 'AUTOMATIC_POSTING_MODE',
              '2' : 'BILATERAL_NETTING_ONLY',
              '6' : 'CLEAR_AGAINST_CENTRAL_COUNTERPARTY',
              '10' : 'AUTOMATIC_GIVE_UP_MODE',
              '4' : 'SPECIAL_TRADE',
              '3' : 'EX_CLEARING',
              '0' : 'PROCESS_NORMALLY',
              '7' : 'EXCLUDE_FROM_CENTRAL_COUNTERPARTY',
              '1' : 'EXCLUDE_FROM_ALL_NETTING'
            }
          },
  '578' : { name: 'TradeInputSource', type: 'string' },
  '579' : { name: 'TradeInputDevice', type: 'string' },
  '580' : { name: 'NoDates', type: 'numingroup' },
  '581' : { name: 'AccountType', type: 'int',
            enums: {
              '3' : 'HOUSE_TRADER',
              '7' : 'ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED',
              '6' : 'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED',
              '4' : 'FLOOR_TRADER',
              '2' : 'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS',
              '1' : 'ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS',
              '8' : 'JOINT_BACKOFFICE_ACCOUNT'
            }
          },
  '582' : { name: 'CustOrderCapacity', type: 'int' },
  '583' : { name: 'ClOrdLinkID', type: 'string' },
  '584' : { name: 'MassStatusReqID', type: 'string' },
  '585' : { name: 'MassStatusReqType', type: 'int',
            enums: {
              '1' : 'STATUS_FOR_ORDERS_FOR_A_SECURITY',
              '2' : 'STATUS_FOR_ORDERS_FOR_AN_UNDERLYING_SECURITY',
              '3' : 'STATUS_FOR_ORDERS_FOR_A_PRODUCT',
              '4' : 'STATUS_FOR_ORDERS_FOR_A_CFICODE',
              '5' : 'STATUS_FOR_ORDERS_FOR_A_SECURITYTYPE',
              '6' : 'STATUS_FOR_ORDERS_FOR_A_TRADING_SESSION',
              '8' : 'STATUS_FOR_ORDERS_FOR_A_PARTYID',
              '7' : 'STATUS_FOR_ALL_ORDERS'
            }
          },
  '586' : { name: 'OrigOrdModTime', type: 'utctimestamp' },
  '587' : { name: 'LegSettlmntTyp', type: 'char' },
  '588' : { name: 'LegFutSettDate', type: 'localmktdate' },
  '589' : { name: 'DayBookingInst', type: 'char',
            enums: {
              '0' : 'CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR',
              '1' : 'SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING'
            }
          },
  '590' : { name: 'BookingUnit', type: 'char',
            enums: {
              '1' : 'AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER',
              '2' : 'AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE',
              '0' : 'EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT'
            }
          },
  '591' : { name: 'PreallocMethod', type: 'char',
            enums: {
              '0' : 'PRO_RATA',
              '1' : 'DO_NOT_PRO_RATA_DISCUSS_FIRST'
            }
          },
  '592' : { name: 'UnderlyingCountryOfIssue', type: 'country' },
  '593' : { name: 'UnderlyingStateOrProvinceOfIssue', type: 'string' },
  '594' : { name: 'UnderlyingLocaleOfIssue', type: 'string' },
  '595' : { name: 'UnderlyingInstrRegistry', type: 'string' },
  '596' : { name: 'LegCountryOfIssue', type: 'country' },
  '597' : { name: 'LegStateOrProvinceOfIssue', type: 'string' },
  '598' : { name: 'LegLocaleOfIssue', type: 'string' },
  '599' : { name: 'LegInstrRegistry', type: 'string' },
  '600' : { name: 'LegSymbol', type: 'string' },
  '601' : { name: 'LegSymbolSfx', type: 'string' },
  '602' : { name: 'LegSecurityID', type: 'string' },
  '603' : { name: 'LegSecurityIDSource', type: 'string' },
  '604' : { name: 'NoLegSecurityAltID', type: 'numingroup' },
  '605' : { name: 'LegSecurityAltID', type: 'string' },
  '606' : { name: 'LegSecurityAltIDSource', type: 'string' },
  '607' : { name: 'LegProduct', type: 'int' },
  '608' : { name: 'LegCFICode', type: 'string' },
  '609' : { name: 'LegSecurityType', type: 'string' },
  '610' : { name: 'LegMaturityMonthYear', type: 'monthyear' },
  '611' : { name: 'LegMaturityDate', type: 'localmktdate' },
  '612' : { name: 'LegStrikePrice', type: 'price' },
  '613' : { name: 'LegOptAttribute', type: 'char' },
  '614' : { name: 'LegContractMultiplier', type: 'float' },
  '615' : { name: 'LegCouponRate', type: 'percentage' },
  '616' : { name: 'LegSecurityExchange', type: 'exchange' },
  '617' : { name: 'LegIssuer', type: 'string' },
  '618' : { name: 'EncodedLegIssuerLen', type: 'length' },
  '619' : { name: 'EncodedLegIssuer', type: 'data' },
  '620' : { name: 'LegSecurityDesc', type: 'string' },
  '621' : { name: 'EncodedLegSecurityDescLen', type: 'length' },
  '622' : { name: 'EncodedLegSecurityDesc', type: 'data' },
  '623' : { name: 'LegRatioQty', type: 'float' },
  '624' : { name: 'LegSide', type: 'char' },
  '625' : { name: 'TradingSessionSubID', type: 'string' },
  '626' : { name: 'AllocType', type: 'int',
            enums: {
              '6' : 'BUYSIDE_READY_TO_BOOK_6',
              '2' : 'BUYSIDE_PRELIMINARY',
              '3' : 'SELLSIDE_CALCULATED_USING_PRELIMINARY',
              '5' : 'BUYSIDE_READY_TO_BOOK_5',
              '1' : 'BUYSIDE_CALCULATED',
              '4' : 'SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY'
            }
          },
  '627' : { name: 'NoHops', type: 'numingroup' },
  '628' : { name: 'HopCompID', type: 'string' },
  '629' : { name: 'HopSendingTime', type: 'utctimestamp' },
  '630' : { name: 'HopRefID', type: 'seqnum' },
  '631' : { name: 'MidPx', type: 'price' },
  '632' : { name: 'BidYield', type: 'percentage' },
  '633' : { name: 'MidYield', type: 'percentage' },
  '634' : { name: 'OfferYield', type: 'percentage' },
  '635' : { name: 'ClearingFeeIndicator', type: 'string',
            enums: {
              'H' : '106H_AND_106J_FIRMS',
              '5' : '5TH_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT',
              '4' : '4TH_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT',
              '3' : '3RD_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT',
              '2' : '2ND_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT',
              '1' : '1ST_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT',
              'M' : 'ALL_OTHER_OWNERSHIP_TYPES',
              'I' : 'GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS',
              '9' : '6TH_YEAR_AND_BEYOND_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT',
              'F' : 'FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR',
              'E' : 'EQUITY_MEMBER_AND_CLEARING_MEMBER',
              'C' : 'NON_MEMBER_AND_CUSTOMER',
              'B' : 'CBOE_MEMBER',
              'L' : 'LESSEE_AND_106F_EMPLOYEES'
            }
          },
  '636' : { name: 'WorkingIndicator', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '637' : { name: 'LegLastPx', type: 'price' },
  '638' : { name: 'PriorityIndicator', type: 'int',
            enums: {
              '0' : 'PRIORITY_UNCHANGED',
              '1' : 'LOST_PRIORITY_AS_RESULT_OF_ORDER_CHANGE'
            }
          },
  '639' : { name: 'PriceImprovement', type: 'priceoffset' },
  '640' : { name: 'Price2', type: 'price' },
  '641' : { name: 'LastForwardPoints2', type: 'priceoffset' },
  '642' : { name: 'BidForwardPoints2', type: 'priceoffset' },
  '643' : { name: 'OfferForwardPoints2', type: 'priceoffset' },
  '644' : { name: 'RFQReqID', type: 'string' },
  '645' : { name: 'MktBidPx', type: 'price' },
  '646' : { name: 'MktOfferPx', type: 'price' },
  '647' : { name: 'MinBidSize', type: 'qty' },
  '648' : { name: 'MinOfferSize', type: 'qty' },
  '649' : { name: 'QuoteStatusReqID', type: 'string' },
  '650' : { name: 'LegalConfirm', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '651' : { name: 'UnderlyingLastPx', type: 'price' },
  '652' : { name: 'UnderlyingLastQty', type: 'qty' },
  '654' : { name: 'LegRefID', type: 'string' },
  '655' : { name: 'ContraLegRefID', type: 'string' },
  '656' : { name: 'SettlCurrBidFxRate', type: 'float' },
  '657' : { name: 'SettlCurrOfferFxRate', type: 'float' },
  '658' : { name: 'QuoteRequestRejectReason', type: 'int',
            enums: {
              '1' : 'UNKNOWN_SYMBOL',
              '2' : 'EXCHANGE',
              '3' : 'QUOTE_REQUEST_EXCEEDS_LIMIT',
              '4' : 'TOO_LATE_TO_ENTER',
              '5' : 'INVALID_PRICE',
              '6' : 'NOT_AUTHORIZED_TO_REQUEST_QUOTE'
            }
          },
  '659' : { name: 'SideComplianceID', type: 'string' },
}
  };
