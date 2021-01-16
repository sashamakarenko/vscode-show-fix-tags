export const FIX11_FIELDS = {
  version : '1.1',
  fields : {
    '7' : { name: 'BeginSeqNo', type: 'seqnum' },
    '8' : { name: 'BeginString', type: 'string' },
    '9' : { name: 'BodyLength', type: 'length' },
   '10' : { name: 'CheckSum', type: 'string' },
   '16' : { name: 'EndSeqNo', type: 'seqnum' },
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
              'A' : 'LOGON',
              'B' : 'NEWS',
              'C' : 'EMAIL',
              'D' : 'ORDER_SINGLE',
              'E' : 'ORDER_LIST',
              'F' : 'ORDER_CANCEL_REQUEST',
              'G' : 'ORDER_CANCEL_REPLACE_REQUEST',
              'H' : 'ORDER_STATUS_REQUEST',
              'J' : 'ALLOCATION_INSTRUCTION',
              'K' : 'LIST_CANCEL_REQUEST',
              'L' : 'LIST_EXECUTE',
              'M' : 'LIST_STATUS_REQUEST',
              'N' : 'LIST_STATUS',
              'P' : 'ALLOCATION_INSTRUCTION_ACK',
              'Q' : 'DONT_KNOW_TRADE',
              'R' : 'QUOTE_REQUEST',
              'S' : 'QUOTE',
              'T' : 'SETTLEMENT_INSTRUCTIONS',
              'V' : 'MARKET_DATA_REQUEST',
              'W' : 'MARKET_DATA_SNAPSHOT_FULL_REFRESH',
              'X' : 'MARKET_DATA_INCREMENTAL_REFRESH',
              'Y' : 'MARKET_DATA_REQUEST_REJECT',
              'Z' : 'QUOTE_CANCEL',
              'a' : 'QUOTE_STATUS_REQUEST',
              'b' : 'MASS_QUOTE_ACKNOWLEDGEMENT',
              'c' : 'SECURITY_DEFINITION_REQUEST',
              'd' : 'SECURITY_DEFINITION',
              'e' : 'SECURITY_STATUS_REQUEST',
              'f' : 'SECURITY_STATUS',
              'g' : 'TRADING_SESSION_STATUS_REQUEST',
              'h' : 'TRADING_SESSION_STATUS',
              'i' : 'MASS_QUOTE',
              'j' : 'BUSINESS_MESSAGE_REJECT',
              'k' : 'BID_REQUEST',
              'l' : 'BID_RESPONSE',
              'm' : 'LIST_STRIKE_PRICE',
              'n' : 'XML_MESSAGE',
              'o' : 'REGISTRATION_INSTRUCTIONS',
              'p' : 'REGISTRATION_INSTRUCTIONS_RESPONSE',
              'q' : 'ORDER_MASS_CANCEL_REQUEST',
              'r' : 'ORDER_MASS_CANCEL_REPORT',
              's' : 'NEW_ORDER_CROSS',
              't' : 'CROSS_ORDER_CANCEL_REPLACE_REQUEST',
              'u' : 'CROSS_ORDER_CANCEL_REQUEST',
              'v' : 'SECURITY_TYPE_REQUEST',
              'w' : 'SECURITY_TYPES',
              'x' : 'SECURITY_LIST_REQUEST',
              'y' : 'SECURITY_LIST',
              'z' : 'DERIVATIVE_SECURITY_LIST_REQUEST',
              'AA' : 'DERIVATIVE_SECURITY_LIST',
              'AB' : 'NEW_ORDER_MULTILEG',
              'AC' : 'MULTILEG_ORDER_CANCEL_REPLACE',
              'AD' : 'TRADE_CAPTURE_REPORT_REQUEST',
              'AE' : 'TRADE_CAPTURE_REPORT',
              'AF' : 'ORDER_MASS_STATUS_REQUEST',
              'AG' : 'QUOTE_REQUEST_REJECT',
              'AH' : 'RFQ_REQUEST',
              'AI' : 'QUOTE_STATUS_REPORT',
              'AJ' : 'QUOTE_RESPONSE',
              'AK' : 'CONFIRMATION',
              'AL' : 'POSITION_MAINTENANCE_REQUEST',
              'AM' : 'POSITION_MAINTENANCE_REPORT',
              'AN' : 'REQUEST_FOR_POSITIONS',
              'AO' : 'REQUEST_FOR_POSITIONS_ACK',
              'AP' : 'POSITION_REPORT',
              'AQ' : 'TRADE_CAPTURE_REPORT_REQUEST_ACK',
              'AR' : 'TRADE_CAPTURE_REPORT_ACK',
              'AS' : 'ALLOCATION_REPORT',
              'AT' : 'ALLOCATION_REPORT_ACK',
              'AU' : 'CONFIRMATION_ACK',
              'AV' : 'SETTLEMENT_INSTRUCTION_REQUEST',
              'AW' : 'ASSIGNMENT_REPORT',
              'AX' : 'COLLATERAL_REQUEST',
              'AY' : 'COLLATERAL_ASSIGNMENT',
              'AZ' : 'COLLATERAL_RESPONSE',
              'BA' : 'COLLATERAL_REPORT',
              'BB' : 'COLLATERAL_INQUIRY',
              'BC' : 'NETWORK_STATUS_REQUEST',
              'BD' : 'NETWORK_STATUS_RESPONSE',
              'BE' : 'USER_REQUEST',
              'BF' : 'USER_RESPONSE',
              'BG' : 'COLLATERAL_INQUIRY_ACK',
              'BH' : 'CONFIRMATION_REQUEST',
              'BI' : 'TRADING_SESSION_LIST_REQUEST',
              'BJ' : 'TRADING_SESSION_LIST',
              'BK' : 'SECURITY_LIST_UPDATE_REPORT',
              'BL' : 'ADJUSTED_POSITION_REPORT',
              'BM' : 'ALLOCATION_INSTRUCTION_ALERT',
              'BN' : 'EXECUTION_ACKNOWLEDGEMENT',
              'BO' : 'CONTRARY_INTENTION_REPORT',
              'BP' : 'SECURITY_DEFINITION_UPDATE_REPORT'
            }
          },
   '36' : { name: 'NewSeqNo', type: 'seqnum' },
   '43' : { name: 'PossDupFlag', type: 'boolean' },
   '45' : { name: 'RefSeqNum', type: 'seqnum' },
   '49' : { name: 'SenderCompID', type: 'string' },
   '50' : { name: 'SenderSubID', type: 'string' },
   '52' : { name: 'SendingTime', type: 'utctimestamp' },
   '56' : { name: 'TargetCompID', type: 'string' },
   '57' : { name: 'TargetSubID', type: 'string' },
   '58' : { name: 'Text', type: 'string' },
   '89' : { name: 'Signature', type: 'data' },
   '90' : { name: 'SecureDataLen', type: 'length' },
   '91' : { name: 'SecureData', type: 'data' },
   '93' : { name: 'SignatureLength', type: 'length' },
   '95' : { name: 'RawDataLength', type: 'length' },
   '96' : { name: 'RawData', type: 'data' },
   '97' : { name: 'PossResend', type: 'boolean' },
   '98' : { name: 'EncryptMethod', type: 'int',
            enums: {
              '0' : 'NONE_OTHER',
              '1' : 'PKCS',
              '2' : 'DES',
              '3' : 'PKCS_DES',
              '4' : 'PGP_DES',
              '5' : 'PGP_DES_MD5',
              '6' : 'PEM_DES_MD5'
            }
          },
  '108' : { name: 'HeartBtInt', type: 'int' },
  '112' : { name: 'TestReqID', type: 'string' },
  '115' : { name: 'OnBehalfOfCompID', type: 'string' },
  '116' : { name: 'OnBehalfOfSubID', type: 'string' },
  '122' : { name: 'OrigSendingTime', type: 'utctimestamp' },
  '123' : { name: 'GapFillFlag', type: 'boolean' },
  '128' : { name: 'DeliverToCompID', type: 'string' },
  '129' : { name: 'DeliverToSubID', type: 'string' },
  '141' : { name: 'ResetSeqNumFlag', type: 'boolean' },
  '142' : { name: 'SenderLocationID', type: 'string' },
  '143' : { name: 'TargetLocationID', type: 'string' },
  '144' : { name: 'OnBehalfOfLocationID', type: 'string' },
  '145' : { name: 'DeliverToLocationID', type: 'string' },
  '212' : { name: 'XmlDataLen', type: 'length' },
  '213' : { name: 'XmlData', type: 'data' },
  '347' : { name: 'MessageEncoding', type: 'string',
            enums: {
              'ISO-2022-JP' : 'ISO_2022_JP',
              'EUC-JP' : 'EUC_JP',
              'SHIFT_JIS' : 'SHIFT_JIS',
              'UTF-8' : 'UTF_8'
            }
          },
  '354' : { name: 'EncodedTextLen', type: 'length' },
  '355' : { name: 'EncodedText', type: 'data' },
  '369' : { name: 'LastMsgSeqNumProcessed', type: 'seqnum' },
  '371' : { name: 'RefTagID', type: 'int' },
  '372' : { name: 'RefMsgType', type: 'string' },
  '373' : { name: 'SessionRejectReason', type: 'int',
            enums: {
              '0' : 'INVALID_TAG_NUMBER',
              '1' : 'REQUIRED_TAG_MISSING',
              '10' : 'SENDINGTIME_ACCURACY_PROBLEM',
              '11' : 'INVALID_MSGTYPE',
              '12' : 'XML_VALIDATION_ERROR',
              '13' : 'TAG_APPEARS_MORE_THAN_ONCE',
              '14' : 'TAG_SPECIFIED_OUT_OF_REQUIRED_ORDER',
              '15' : 'REPEATING_GROUP_FIELDS_OUT_OF_ORDER',
              '16' : 'INCORRECT_NUMINGROUP_COUNT_FOR_REPEATING_GROUP',
              '17' : 'NON_DATA_VALUE_INCLUDES_FIELD_DELIMITER',
              '2' : 'TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE',
              '3' : 'UNDEFINED_TAG',
              '4' : 'TAG_SPECIFIED_WITHOUT_A_VALUE',
              '5' : 'VALUE_IS_INCORRECT',
              '6' : 'INCORRECT_DATA_FORMAT_FOR_VALUE',
              '7' : 'DECRYPTION_PROBLEM',
              '8' : 'SIGNATURE_PROBLEM',
              '9' : 'COMPID_PROBLEM',
              '99' : 'OTHER'
            }
          },
  '383' : { name: 'MaxMessageSize', type: 'length' },
  '384' : { name: 'NoMsgTypes', type: 'numingroup' },
  '385' : { name: 'MsgDirection', type: 'char',
            enums: {
              'R' : 'RECEIVE',
              'S' : 'SEND'
            }
          },
  '464' : { name: 'TestMessageIndicator', type: 'boolean' },
  '553' : { name: 'Username', type: 'string' },
  '554' : { name: 'Password', type: 'string' },
  '627' : { name: 'NoHops', type: 'numingroup' },
  '628' : { name: 'HopCompID', type: 'string' },
  '629' : { name: 'HopSendingTime', type: 'utctimestamp' },
  '630' : { name: 'HopRefID', type: 'seqnum' },
  '789' : { name: 'NextExpectedMsgSeqNum', type: 'seqnum' },
 '1128' : { name: 'ApplVerID', type: 'string',
            enums: {
              '0' : 'FIX27',
              '1' : 'FIX30',
              '2' : 'FIX40',
              '3' : 'FIX41',
              '4' : 'FIX42',
              '5' : 'FIX43',
              '6' : 'FIX44',
              '7' : 'FIX50',
              '8' : 'FIX50SP1',
              '9' : 'FIX50SP2'
            }
          },
 '1129' : { name: 'CstmApplVerID', type: 'string' },
 '1130' : { name: 'RefApplVerID', type: 'string' },
 '1131' : { name: 'RefCstmApplVerID', type: 'string' },
 '1137' : { name: 'DefaultApplVerID', type: 'string' },
}
  };