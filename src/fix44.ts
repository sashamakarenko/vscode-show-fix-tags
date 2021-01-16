export const FIX44_FIELDS = {
  version : '4.4',
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
              '1' : 'PER_UNIT',
              '2' : 'PERCENTAGE',
              '3' : 'ABSOLUTE',
              '4' : '4',
              '5' : '5',
              '6' : 'POINTS_PER_BOND_OR_CONTRACT_SUPPLY_CONTRACTMULTIPLIER'
            }
          },
   '14' : { name: 'CumQty', type: 'qty' },
   '15' : { name: 'Currency', type: 'currency' },
   '16' : { name: 'EndSeqNo', type: 'seqnum' },
   '17' : { name: 'ExecID', type: 'string' },
   '18' : { name: 'ExecInst', type: 'multiplevaluestring',
            enums: {
              '1' : 'NOT_HELD',
              '2' : 'WORK',
              '3' : 'GO_ALONG',
              '4' : 'OVER_THE_DAY',
              '5' : 'HELD',
              '6' : 'PARTICIPATE_DONT_INITIATE',
              '7' : 'STRICT_SCALE',
              '8' : 'TRY_TO_SCALE',
              '9' : 'STAY_ON_BIDSIDE',
              '0' : 'STAY_ON_OFFERSIDE',
              'A' : 'NO_CROSS',
              'B' : 'OK_TO_CROSS',
              'C' : 'CALL_FIRST',
              'D' : 'PERCENT_OF_VOLUME',
              'E' : 'DO_NOT_INCREASE',
              'F' : 'DO_NOT_REDUCE',
              'G' : 'ALL_OR_NONE',
              'H' : 'REINSTATE_ON_SYSTEM_FAILURE',
              'I' : 'INSTITUTIONS_ONLY',
              'J' : 'REINSTATE_ON_TRADING_HALT',
              'K' : 'CANCEL_ON_TRADING_HALT',
              'L' : 'LAST_PEG',
              'M' : 'MID_PRICE_PEG',
              'N' : 'NON_NEGOTIABLE',
              'O' : 'OPENING_PEG',
              'P' : 'MARKET_PEG',
              'Q' : 'CANCEL_ON_SYSTEM_FAILURE',
              'R' : 'PRIMARY_PEG',
              'S' : 'SUSPEND',
              'U' : 'CUSTOMER_DISPLAY_INSTRUCTION',
              'V' : 'NETTING',
              'W' : 'PEG_TO_VWAP',
              'X' : 'TRADE_ALONG',
              'Y' : 'TRY_TO_STOP',
              'Z' : 'CANCEL_IF_NOT_BEST',
              'a' : 'TRAILING_STOP_PEG',
              'b' : 'STRICT_LIMIT',
              'c' : 'IGNORE_PRICE_VALIDITY_CHECKS',
              'd' : 'PEG_TO_LIMIT_PRICE',
              'e' : 'WORK_TO_TARGET_STRATEGY'
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
              '1' : 'CUSIP',
              '2' : 'SEDOL',
              '3' : 'QUIK',
              '4' : 'ISIN_NUMBER',
              '5' : 'RIC_CODE',
              '6' : 'ISO_CURRENCY_CODE',
              '7' : 'ISO_COUNTRY_CODE',
              '8' : 'EXCHANGE_SYMBOL',
              '9' : 'CONSOLIDATED_TAPE_ASSOCIATION',
              'A' : 'BLOOMBERG_SYMBOL',
              'B' : 'WERTPAPIER',
              'C' : 'DUTCH',
              'D' : 'VALOREN',
              'E' : 'SICOVAM',
              'F' : 'BELGIAN',
              'G' : 'COMMON',
              'H' : 'CLEARING_HOUSE',
              'I' : 'ISDA_FPML_PRODUCT_SPECIFICATION',
              'J' : 'OPTIONS_PRICE_REPORTING_AUTHORITY'
            }
          },
   '23' : { name: 'IOIID', type: 'string' },
   '25' : { name: 'IOIQltyInd', type: 'char',
            enums: {
              'L' : 'LOW',
              'M' : 'MEDIUM',
              'H' : 'HIGH'
            }
          },
   '26' : { name: 'IOIRefID', type: 'string' },
   '27' : { name: 'IOIQty', type: 'string',
            enums: {
              'S' : 'SMALL',
              'M' : 'MEDIUM',
              'L' : 'LARGE'
            }
          },
   '28' : { name: 'IOITransType', type: 'char',
            enums: {
              'N' : 'NEW',
              'C' : 'CANCEL',
              'R' : 'REPLACE'
            }
          },
   '29' : { name: 'LastCapacity', type: 'char',
            enums: {
              '1' : 'AGENT',
              '2' : 'CROSS_AS_AGENT',
              '3' : 'CROSS_AS_PRINCIPAL',
              '4' : 'PRINCIPAL'
            }
          },
   '30' : { name: 'LastMkt', type: 'exchange' },
   '31' : { name: 'LastPx', type: 'price' },
   '32' : { name: 'LastQty', type: 'qty' },
   '33' : { name: 'NoLinesOfText', type: 'numingroup' },
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
              's' : 'NEW_ORDER_s',
              't' : 'CROSS_ORDER_CANCEL_REPLACE_REQUEST',
              'u' : 'CROSS_ORDER_CANCEL_REQUEST',
              'v' : 'SECURITY_TYPE_REQUEST',
              'w' : 'SECURITY_TYPES',
              'x' : 'SECURITY_LIST_REQUEST',
              'y' : 'SECURITY_LIST',
              'z' : 'DERIVATIVE_SECURITY_LIST_REQUEST',
              'AA' : 'DERIVATIVE_SECURITY_LIST',
              'AB' : 'NEW_ORDER_AB',
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
              'BC' : 'NETWORK_BC',
              'BD' : 'NETWORK_BD',
              'BE' : 'USER_REQUEST',
              'BF' : 'USER_RESPONSE',
              'BG' : 'COLLATERAL_INQUIRY_ACK',
              'BH' : 'CONFIRMATION_REQUEST'
            }
          },
   '36' : { name: 'NewSeqNo', type: 'seqnum' },
   '37' : { name: 'OrderID', type: 'string' },
   '38' : { name: 'OrderQty', type: 'qty' },
   '39' : { name: 'OrdStatus', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'PARTIALLY_FILLED',
              '2' : 'FILLED',
              '3' : 'DONE_FOR_DAY',
              '4' : 'CANCELED',
              '6' : 'PENDING_CANCEL',
              '7' : 'STOPPED',
              '8' : 'REJECTED',
              '9' : 'SUSPENDED',
              'A' : 'PENDING_NEW',
              'B' : 'CALCULATED',
              'C' : 'EXPIRED',
              'D' : 'ACCEPTED_FOR_BIDDING',
              'E' : 'PENDING_REPLACE'
            }
          },
   '40' : { name: 'OrdType', type: 'char',
            enums: {
              '1' : 'MARKET',
              '2' : 'LIMIT',
              '3' : 'STOP',
              '4' : 'STOP_LIMIT',
              '6' : 'WITH_OR_WITHOUT',
              '7' : 'LIMIT_OR_BETTER',
              '8' : 'LIMIT_WITH_OR_WITHOUT',
              '9' : 'ON_BASIS',
              'D' : 'PREVIOUSLY_QUOTED',
              'E' : 'PREVIOUSLY_INDICATED',
              'G' : 'FOREX',
              'I' : 'FUNARI',
              'J' : 'MARKET_IF_TOUCHED',
              'K' : 'MARKET_WITH_LEFTOVER_AS_LIMIT',
              'L' : 'PREVIOUS_FUND_VALUATION_POINT',
              'M' : 'NEXT_FUND_VALUATION_POINT',
              'P' : 'PEGGED'
            }
          },
   '41' : { name: 'OrigClOrdID', type: 'string' },
   '42' : { name: 'OrigTime', type: 'utctimestamp' },
   '43' : { name: 'PossDupFlag', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
   '44' : { name: 'Price', type: 'price' },
   '45' : { name: 'RefSeqNum', type: 'seqnum' },
   '48' : { name: 'SecurityID', type: 'string' },
   '49' : { name: 'SenderCompID', type: 'string' },
   '50' : { name: 'SenderSubID', type: 'string' },
   '52' : { name: 'SendingTime', type: 'utctimestamp' },
   '53' : { name: 'Quantity', type: 'qty' },
   '54' : { name: 'Side', type: 'char',
            enums: {
              '1' : 'BUY',
              '2' : 'SELL',
              '3' : 'BUY_MINUS',
              '4' : 'SELL_PLUS',
              '5' : 'SELL_SHORT',
              '6' : 'SELL_SHORT_EXEMPT',
              '7' : 'UNDISCLOSED',
              '8' : 'CROSS',
              '9' : 'CROSS_SHORT',
              'A' : 'CROSS_SHORT_EXEMPT',
              'B' : 'AS_DEFINED',
              'C' : 'OPPOSITE',
              'D' : 'SUBSCRIBE',
              'E' : 'REDEEM',
              'F' : 'LEND',
              'G' : 'BORROW'
            }
          },
   '55' : { name: 'Symbol', type: 'string' },
   '56' : { name: 'TargetCompID', type: 'string' },
   '57' : { name: 'TargetSubID', type: 'string' },
   '58' : { name: 'Text', type: 'string' },
   '59' : { name: 'TimeInForce', type: 'char',
            enums: {
              '0' : 'DAY',
              '1' : 'GOOD_TILL_CANCEL',
              '2' : 'AT_THE_OPENING',
              '3' : 'IMMEDIATE_OR_CANCEL',
              '4' : 'FILL_OR_KILL',
              '5' : 'GOOD_TILL_CROSSING',
              '6' : 'GOOD_TILL_DATE',
              '7' : 'AT_THE_CLOSE'
            }
          },
   '60' : { name: 'TransactTime', type: 'utctimestamp' },
   '61' : { name: 'Urgency', type: 'char',
            enums: {
              '0' : 'NORMAL',
              '1' : 'FLASH',
              '2' : 'BACKGROUND'
            }
          },
   '62' : { name: 'ValidUntilTime', type: 'utctimestamp' },
   '63' : { name: 'SettlType', type: 'char',
            enums: {
              '0' : 'REGULAR',
              '1' : 'CASH',
              '2' : 'NEXT_DAY',
              '3' : 'T_PLUS_2',
              '4' : 'T_PLUS_3',
              '5' : 'T_PLUS_4',
              '6' : 'FUTURE',
              '7' : 'WHEN_AND_IF_ISSUED',
              '8' : 'SELLERS_OPTION',
              '9' : 'T_PLUS_5'
            }
          },
   '64' : { name: 'SettlDate', type: 'localmktdate' },
   '65' : { name: 'SymbolSfx', type: 'string' },
   '66' : { name: 'ListID', type: 'string' },
   '67' : { name: 'ListSeqNo', type: 'int' },
   '68' : { name: 'TotNoOrders', type: 'int' },
   '69' : { name: 'ListExecInst', type: 'string' },
   '70' : { name: 'AllocID', type: 'string' },
   '71' : { name: 'AllocTransType', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'REPLACE',
              '2' : 'CANCEL'
            }
          },
   '72' : { name: 'RefAllocID', type: 'string' },
   '73' : { name: 'NoOrders', type: 'numingroup' },
   '74' : { name: 'AvgPxPrecision', type: 'int' },
   '75' : { name: 'TradeDate', type: 'localmktdate' },
   '77' : { name: 'PositionEffect', type: 'char',
            enums: {
              'O' : 'OPEN',
              'C' : 'CLOSE',
              'R' : 'ROLLED',
              'F' : 'FIFO'
            }
          },
   '78' : { name: 'NoAllocs', type: 'numingroup' },
   '79' : { name: 'AllocAccount', type: 'string' },
   '80' : { name: 'AllocQty', type: 'qty' },
   '81' : { name: 'ProcessCode', type: 'char',
            enums: {
              '0' : 'REGULAR',
              '1' : 'SOFT_DOLLAR',
              '2' : 'STEP_IN',
              '3' : 'STEP_OUT',
              '4' : 'SOFT_DOLLAR_STEP_IN',
              '5' : 'SOFT_DOLLAR_STEP_OUT',
              '6' : 'PLAN_SPONSOR'
            }
          },
   '82' : { name: 'NoRpts', type: 'int' },
   '83' : { name: 'RptSeq', type: 'int' },
   '84' : { name: 'CxlQty', type: 'qty' },
   '85' : { name: 'NoDlvyInst', type: 'numingroup' },
   '87' : { name: 'AllocStatus', type: 'int',
            enums: {
              '0' : 'ACCEPTED',
              '1' : 'BLOCK_LEVEL_REJECT',
              '2' : 'ACCOUNT_LEVEL_REJECT',
              '3' : 'RECEIVED',
              '4' : 'INCOMPLETE',
              '5' : 'REJECTED_BY_INTERMEDIARY'
            }
          },
   '88' : { name: 'AllocRejCode', type: 'int',
            enums: {
              '0' : 'UNKNOWN_ACCOUNT',
              '1' : 'INCORRECT_QUANTITY',
              '2' : 'INCORRECT_AVERAGE_PRICE',
              '3' : 'UNKNOWN_EXECUTING_BROKER_MNEMONIC',
              '4' : 'COMMISSION_DIFFERENCE',
              '5' : 'UNKNOWN_ORDERID',
              '6' : 'UNKNOWN_LISTID',
              '7' : 'OTHER',
              '8' : 'INCORRECT_ALLOCATED_QUANTITY',
              '9' : 'CALCULATION_DIFFERENCE',
              '10' : 'UNKNOWN_OR_STALE_EXECID',
              '11' : 'MISMATCHED_DATA_VALUE',
              '12' : 'UNKNOWN_CLORDID',
              '13' : 'WAREHOUSE_REQUEST_REJECTED'
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
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
   '98' : { name: 'EncryptMethod', type: 'int',
            enums: {
              '0' : 'NONE',
              '1' : 'PKCS',
              '2' : 'DES',
              '3' : 'PKCS_DES',
              '4' : 'PGP_DES',
              '5' : 'PGP_DES_MD5',
              '6' : 'PEM_DES_MD5'
            }
          },
   '99' : { name: 'StopPx', type: 'price' },
  '100' : { name: 'ExDestination', type: 'exchange' },
  '102' : { name: 'CxlRejReason', type: 'int',
            enums: {
              '0' : 'TOO_LATE_TO_CANCEL',
              '1' : 'UNKNOWN_ORDER',
              '2' : 'BROKER',
              '3' : 'ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS',
              '4' : 'UNABLE_TO_PROCESS_ORDER_MASS_CANCEL_REQUEST',
              '5' : 'ORIGORDMODTIME',
              '6' : 'DUPLICATE_CLORDID',
              '99' : 'OTHER'
            }
          },
  '103' : { name: 'OrdRejReason', type: 'int',
            enums: {
              '0' : 'BROKER',
              '1' : 'UNKNOWN_SYMBOL',
              '2' : 'EXCHANGE_CLOSED',
              '3' : 'ORDER_EXCEEDS_LIMIT',
              '4' : 'TOO_LATE_TO_ENTER',
              '5' : 'UNKNOWN_ORDER',
              '6' : 'DUPLICATE_ORDER',
              '7' : 'DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER',
              '8' : 'STALE_ORDER',
              '9' : 'TRADE_ALONG_REQUIRED',
              '10' : 'INVALID_INVESTOR_ID',
              '11' : 'UNSUPPORTED_ORDER_CHARACTERISTIC12_SURVEILLENCE_OPTION',
              '13' : 'INCORRECT_QUANTITY',
              '14' : 'INCORRECT_ALLOCATED_QUANTITY',
              '15' : 'UNKNOWN_ACCOUNT',
              '99' : 'OTHER'
            }
          },
  '104' : { name: 'IOIQualifier', type: 'char',
            enums: {
              'A' : 'ALL_OR_NONE',
              'B' : 'MARKET_ON_CLOSE',
              'C' : 'AT_THE_CLOSE',
              'D' : 'VWAP',
              'I' : 'IN_TOUCH_WITH',
              'L' : 'LIMIT',
              'M' : 'MORE_BEHIND',
              'O' : 'AT_THE_OPEN',
              'P' : 'TAKING_A_POSITION',
              'Q' : 'AT_THE_MARKET',
              'R' : 'READY_TO_TRADE',
              'S' : 'PORTFOLIO_SHOWN',
              'T' : 'THROUGH_THE_DAY',
              'V' : 'VERSUS',
              'W' : 'INDICATION',
              'X' : 'CROSSING_OPPORTUNITY',
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
              'A' : 'UNKNOWN_SYMBOL',
              'B' : 'WRONG_SIDE',
              'C' : 'QUANTITY_EXCEEDS_ORDER',
              'D' : 'NO_MATCHING_ORDER',
              'E' : 'PRICE_EXCEEDS_LIMIT',
              'F' : 'CALCULATION_DIFFERENCE',
              'Z' : 'OTHER'
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
  '139' : { name: 'MiscFeeType', type: 'string',
            enums: {
              '1' : 'REGULATORY',
              '2' : 'TAX',
              '3' : 'LOCAL_COMMISSION',
              '4' : 'EXCHANGE_FEES',
              '5' : 'STAMP',
              '6' : 'LEVY',
              '7' : 'OTHER',
              '8' : 'MARKUP',
              '9' : 'CONSUMPTION_TAX',
              '10' : 'PER_TRANSACTION',
              '11' : 'CONVERSION',
              '12' : 'AGENT'
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
              '0' : 'NEW',
              '3' : 'DONE_FOR_DAY',
              '4' : 'CANCELED',
              '5' : 'REPLACE',
              '6' : 'PENDING_CANCEL',
              '7' : 'STOPPED',
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
              'I' : 'ORDER_STATUS'
            }
          },
  '151' : { name: 'LeavesQty', type: 'qty' },
  '152' : { name: 'CashOrderQty', type: 'qty' },
  '153' : { name: 'AllocAvgPx', type: 'price' },
  '154' : { name: 'AllocNetMoney', type: 'amt' },
  '155' : { name: 'SettlCurrFxRate', type: 'float' },
  '156' : { name: 'SettlCurrFxRateCalc', type: 'char',
            enums: {
              'M' : 'MULTIPLY',
              'D' : 'DIVIDE'
            }
          },
  '157' : { name: 'NumDaysInterest', type: 'int' },
  '158' : { name: 'AccruedInterestRate', type: 'percentage' },
  '159' : { name: 'AccruedInterestAmt', type: 'amt' },
  '160' : { name: 'SettlInstMode', type: 'char',
            enums: {
              '1' : 'STANDING_INSTRUCTIONS_PROVIDED',
              '4' : 'SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT',
              '5' : 'REQUEST_REJECT'
            }
          },
  '161' : { name: 'AllocText', type: 'string' },
  '162' : { name: 'SettlInstID', type: 'string' },
  '163' : { name: 'SettlInstTransType', type: 'char',
            enums: {
              'N' : 'NEW',
              'C' : 'CANCEL',
              'R' : 'REPLACE',
              'T' : 'RESTATE'
            }
          },
  '164' : { name: 'EmailThreadID', type: 'string' },
  '165' : { name: 'SettlInstSource', type: 'char',
            enums: {
              '1' : 'BROKERS_INSTRUCTIONS',
              '2' : 'INSTITUTIONS_INSTRUCTIONS',
              '3' : 'INVESTOR'
            }
          },
  '167' : { name: 'SecurityType', type: 'string',
            enums: {
              'FUT' : 'FUTURE',
              'OPT' : 'OPTION',
              'EUSUPRA' : 'EURO_SUPRANATIONAL_COUPONS',
              'FAC' : 'FEDERAL_AGENCY_COUPON',
              'FADN' : 'FEDERAL_AGENCY_DISCOUNT_NOTE',
              'PEF' : 'PRIVATE_EXPORT_FUNDING',
              'SUPRA' : 'USD_SUPRANATIONAL_COUPONS',
              'CORP' : 'CORPORATE_BOND',
              'CPP' : 'CORPORATE_PRIVATE_PLACEMENT',
              'CB' : 'CONVERTIBLE_BOND',
              'DUAL' : 'DUAL_CURRENCY',
              'EUCORP' : 'EURO_CORPORATE_BOND',
              'XLINKD' : 'INDEXED_LINKED',
              'STRUCT' : 'STRUCTURED_NOTES',
              'YANK' : 'YANKEE_CORPORATE_BOND',
              'FOR' : 'FOREIGN_EXCHANGE_CONTRACT',
              'CS' : 'COMMON_STOCK',
              'PS' : 'PREFERRED_STOCK',
              'BRADY' : 'BRADY_BOND',
              'EUSOV' : 'EURO_SOVEREIGNS',
              'TBOND' : 'US_TREASURY_BOND',
              'TINT' : 'INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE',
              'TIPS' : 'TREASURY_INFLATION_PROTECTED_SECURITIES',
              'TCAL' : 'PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE',
              'TPRN' : 'PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE',
              'UST' : 'US_TREASURY_NOTE_UST',
              'USTB' : 'US_TREASURY_BILL_USTB',
              'TNOTE' : 'US_TREASURY_NOTE_TNOTE',
              'TBILL' : 'US_TREASURY_BILL_TBILL',
              'REPO' : 'REPURCHASE',
              'FORWARD' : 'FORWARD',
              'BUYSELL' : 'BUY_SELLBACK',
              'SECLOAN' : 'SECURITIES_LOAN',
              'SECPLEDGE' : 'SECURITIES_PLEDGE',
              'TERM' : 'TERM_LOAN',
              'RVLV' : 'REVOLVER_LOAN',
              'RVLVTRM' : 'REVOLVER_TERM_LOAN',
              'BRIDGE' : 'BRIDGE_LOAN',
              'LOFC' : 'LETTER_OF_CREDIT',
              'SWING' : 'SWING_LINE_FACILITY',
              'DINP' : 'DEBTOR_IN_POSSESSION',
              'DEFLTED' : 'DEFAULTED',
              'WITHDRN' : 'WITHDRAWN',
              'REPLACD' : 'REPLACED',
              'MATURED' : 'MATURED',
              'AMENDED' : 'AMENDED_RESTATED',
              'RETIRED' : 'RETIRED',
              'BA' : 'BANKERS_ACCEPTANCE',
              'BN' : 'BANK_NOTES',
              'BOX' : 'BILL_OF_EXCHANGES',
              'CD' : 'CERTIFICATE_OF_DEPOSIT',
              'CL' : 'CALL_LOANS',
              'CP' : 'COMMERCIAL_PAPER',
              'DN' : 'DEPOSIT_NOTES',
              'EUCD' : 'EURO_CERTIFICATE_OF_DEPOSIT',
              'EUCP' : 'EURO_COMMERCIAL_PAPER',
              'LQN' : 'LIQUIDITY_NOTE',
              'MTN' : 'MEDIUM_TERM_NOTES',
              'ONITE' : 'OVERNIGHT',
              'PN' : 'PROMISSORY_NOTE',
              'PZFJ' : 'PLAZOS_FIJOS',
              'STN' : 'SHORT_TERM_LOAN_NOTE',
              'TD' : 'TIME_DEPOSIT',
              'XCN' : 'EXTENDED_COMM_NOTE',
              'YCD' : 'YANKEE_CERTIFICATE_OF_DEPOSIT',
              'ABS' : 'ASSET_BACKED_SECURITIES',
              'CMBS' : 'CORP_MORTGAGE_BACKED_SECURITIES',
              'CMO' : 'COLLATERALIZED_MORTGAGE_OBLIGATION',
              'IET' : 'IOETTE_MORTGAGE',
              'MBS' : 'MORTGAGE_BACKED_SECURITIES',
              'MIO' : 'MORTGAGE_INTEREST_ONLY',
              'MPO' : 'MORTGAGE_PRINCIPAL_ONLY',
              'MPP' : 'MORTGAGE_PRIVATE_PLACEMENT',
              'MPT' : 'MISCELLANEOUS_PASS_THROUGH',
              'PFAND' : 'PFANDBRIEFE',
              'TBA' : 'TO_BE_ANNOUNCED',
              'AN' : 'OTHER_ANTICIPATION_NOTES_BAN_GAN_ETC',
              'COFO' : 'CERTIFICATE_OF_OBLIGATION',
              'COFP' : 'CERTIFICATE_OF_PARTICIPATION',
              'GO' : 'GENERAL_OBLIGATION_BONDS',
              'MT' : 'MANDATORY_TENDER',
              'RAN' : 'REVENUE_ANTICIPATION_NOTE',
              'REV' : 'REVENUE_BONDS',
              'SPCLA' : 'SPECIAL_ASSESSMENT',
              'SPCLO' : 'SPECIAL_OBLIGATION',
              'SPCLT' : 'SPECIAL_TAX',
              'TAN' : 'TAX_ANTICIPATION_NOTE',
              'TAXA' : 'TAX_ALLOCATION',
              'TECP' : 'TAX_EXEMPT_COMMERCIAL_PAPER',
              'TRAN' : 'TAX_REVENUE_ANTICIPATION_NOTE',
              'VRDN' : 'VARIABLE_RATE_DEMAND_NOTE',
              'WAR' : 'WARRANT',
              'MF' : 'MUTUAL_FUND',
              'MLEG' : 'MULTI_LEG_INSTRUMENT',
              'NONE' : 'NO_SECURITY_TYPE'
            }
          },
  '168' : { name: 'EffectiveTime', type: 'utctimestamp' },
  '169' : { name: 'StandInstDbType', type: 'int',
            enums: {
              '0' : 'OTHER',
              '1' : 'DTC_SID',
              '2' : 'THOMSON_ALERT',
              '3' : 'A_GLOBAL_CUSTODIAN',
              '4' : 'ACCOUNTNET'
            }
          },
  '170' : { name: 'StandInstDbName', type: 'string' },
  '171' : { name: 'StandInstDbID', type: 'string' },
  '172' : { name: 'SettlDeliveryType', type: 'int',
            enums: {
              '0' : 'VERSUS_PAYMENT_DELIVER',
              '1' : 'FREE_DELIVER',
              '2' : 'TRI_PARTY',
              '3' : 'HOLD_IN_CUSTODY'
            }
          },
  '188' : { name: 'BidSpotRate', type: 'price' },
  '189' : { name: 'BidForwardPoints', type: 'priceoffset' },
  '190' : { name: 'OfferSpotRate', type: 'price' },
  '191' : { name: 'OfferForwardPoints', type: 'priceoffset' },
  '192' : { name: 'OrderQty2', type: 'qty' },
  '193' : { name: 'SettlDate2', type: 'localmktdate' },
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
  '201' : { name: 'PutOrCall', type: 'int',
            enums: {
              '0' : 'PUT',
              '1' : 'CALL'
            }
          },
  '202' : { name: 'StrikePrice', type: 'price' },
  '203' : { name: 'CoveredOrUncovered', type: 'int',
            enums: {
              '0' : 'COVERED',
              '1' : 'UNCOVERED'
            }
          },
  '206' : { name: 'OptAttribute', type: 'char' },
  '207' : { name: 'SecurityExchange', type: 'exchange' },
  '208' : { name: 'NotifyBrokerOfCredit', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '209' : { name: 'AllocHandlInst', type: 'int',
            enums: {
              '1' : 'MATCH',
              '2' : 'FORWARD',
              '3' : 'FORWARD_AND_MATCH'
            }
          },
  '210' : { name: 'MaxShow', type: 'qty' },
  '211' : { name: 'PegOffsetValue', type: 'float' },
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
  '220' : { name: 'BenchmarkCurveCurrency', type: 'currency' },
  '221' : { name: 'BenchmarkCurveName', type: 'string' },
  '222' : { name: 'BenchmarkCurvePoint', type: 'string' },
  '223' : { name: 'CouponRate', type: 'percentage' },
  '224' : { name: 'CouponPaymentDate', type: 'localmktdate' },
  '225' : { name: 'IssueDate', type: 'localmktdate' },
  '226' : { name: 'RepurchaseTerm', type: 'int' },
  '227' : { name: 'RepurchaseRate', type: 'percentage' },
  '228' : { name: 'Factor', type: 'float' },
  '229' : { name: 'TradeOriginationDate', type: 'localmktdate' },
  '230' : { name: 'ExDate', type: 'localmktdate' },
  '231' : { name: 'ContractMultiplier', type: 'float' },
  '232' : { name: 'NoStipulations', type: 'numingroup' },
  '233' : { name: 'StipulationType', type: 'string',
            enums: {
              'AMT' : 'AMT',
              'AUTOREINV' : 'AUTO_REINVESTMENT_AT_RATE_OR_BETTER',
              'BANKQUAL' : 'BANK_QUALIFIED',
              'BGNCON' : 'BARGAIN_CONDITIONS_SEE',
              'COUPON' : 'COUPON_RANGE',
              'CURRENCY' : 'ISO_CURRENCY_CODE',
              'CUSTOMDATE' : 'CUSTOM_START_END_DATE',
              'GEOG' : 'GEOGRAPHICS_AND_RANGE',
              'HAIRCUT' : 'VALUATION_DISCOUNT',
              'INSURED' : 'INSURED',
              'ISSUE' : 'YEAR_OR_YEAR_MONTH_OF_ISSUE',
              'ISSUER' : 'ISSUERS_TICKER',
              'ISSUESIZE' : 'ISSUE_SIZE_RANGE',
              'LOOKBACK' : 'LOOKBACK_DAYS',
              'LOT' : 'EXPLICIT_LOT_IDENTIFIER',
              'LOTVAR' : 'LOT_VARIANCE',
              'MAT' : 'MATURITY_YEAR_AND_MONTH',
              'MATURITY' : 'MATURITY_RANGE',
              'MAXSUBS' : 'MAXIMUM_SUBSTITUTIONS',
              'MINQTY' : 'MINIMUM_QUANTITY',
              'MININCR' : 'MINIMUM_INCREMENT',
              'MINDNOM' : 'MINIMUM_DENOMINATION',
              'PAYFREQ' : 'PAYMENT_FREQUENCY_CALENDAR',
              'PIECES' : 'NUMBER_OF_PIECES',
              'PMAX' : 'POOLS_MAXIMUM',
              'PPM' : 'POOLS_PER_MILLION',
              'PPL' : 'POOLS_PER_LOT',
              'PPT' : 'POOLS_PER_TRADE',
              'PRICE' : 'PRICE_RANGE',
              'PRICEFREQ' : 'PRICING_FREQUENCY',
              'PROD' : 'PRODUCTION_YEAR',
              'PROTECT' : 'CALL_PROTECTION',
              'PURPOSE' : 'PURPOSE',
              'PXSOURCE' : 'BENCHMARK_PRICE_SOURCE',
              'RATING' : 'RATING_SOURCE_AND_RANGE',
              'REDEMPTION' : 'TYPE_OF_REDEMPTION_VALUES_ARE_NONCALLABLE_CALLABLE_PREFUNDED_ESCROWEDTOMATURITY_PUTABLE_CONVERTIBLE',
              'RESTRICTED' : 'RESTRICTED',
              'SECTOR' : 'MARKET_SECTOR',
              'SECTYPE' : 'SECURITYTYPE_INCLUDED_OR_EXCLUDED',
              'STRUCT' : 'STRUCTURE',
              'SUBSFREQ' : 'SUBSTITUTIONS_FREQUENCY',
              'SUBSLEFT' : 'SUBSTITUTIONS_LEFT',
              'TEXT' : 'FREEFORM_TEXT',
              'TRDVAR' : 'TRADE_VARIANCE',
              'WAC' : 'WEIGHTED_AVERAGE_COUPONVALUE_IN_PERCENT',
              'WAL' : 'WEIGHTED_AVERAGE_LIFE_COUPON_VALUE_IN_PERCENT',
              'WALA' : 'WEIGHTED_AVERAGE_LOAN_AGE_VALUE_IN_MONTHS',
              'WAM' : 'WEIGHTED_AVERAGE_MATURITY_VALUE_IN_MONTHS',
              'WHOLE' : 'WHOLE_POOL',
              'YIELD' : 'YIELD_RANGE'
            }
          },
  '234' : { name: 'StipulationValue', type: 'string' },
  '235' : { name: 'YieldType', type: 'string',
            enums: {
              'AFTERTAX' : 'AFTER_TAX_YIELD',
              'ANNUAL' : 'ANNUAL_YIELD',
              'ATISSUE' : 'YIELD_AT_ISSUE',
              'AVGMATURITY' : 'YIELD_TO_AVERAGE_MATURITY',
              'BOOK' : 'BOOK_YIELD',
              'CALL' : 'YIELD_TO_NEXT_CALL',
              'CHANGE' : 'YIELD_CHANGE_SINCE_CLOSE',
              'CLOSE' : 'CLOSING_YIELD',
              'COMPOUND' : 'COMPOUND_YIELD',
              'CURRENT' : 'CURRENT_YIELD',
              'GROSS' : 'TRUE_GROSS_YIELD',
              'GOVTEQUIV' : 'GOVERNMENT_EQUIVALENT_YIELD',
              'INFLATION' : 'YIELD_WITH_INFLATION_ASSUMPTION',
              'INVERSEFLOATER' : 'INVERSE_FLOATER_BOND_YIELD',
              'LASTCLOSE' : 'MOST_RECENT_CLOSING_YIELD',
              'LASTMONTH' : 'CLOSING_YIELD_MOST_RECENT_MONTH',
              'LASTQUARTER' : 'CLOSING_YIELD_MOST_RECENT_QUARTER',
              'LASTYEAR' : 'CLOSING_YIELD_MOST_RECENT_YEAR',
              'LONGAVGLIFE' : 'YIELD_TO_LONGEST_AVERAGE_LIFE',
              'MARK' : 'MARK_TO_MARKET_YIELD',
              'MATURITY' : 'YIELD_TO_MATURITY',
              'NEXTREFUND' : 'YIELD_TO_NEXT_REFUND',
              'OPENAVG' : 'OPEN_AVERAGE_YIELD',
              'PUT' : 'YIELD_TO_NEXT_PUT',
              'PREVCLOSE' : 'PREVIOUS_CLOSE_YIELD',
              'PROCEEDS' : 'PROCEEDS_YIELD',
              'SEMIANNUAL' : 'SEMI_ANNUAL_YIELD',
              'SHORTAVGLIFE' : 'YIELD_TO_SHORTEST_AVERAGE_LIFE',
              'SIMPLE' : 'SIMPLE_YIELD',
              'TAXEQUIV' : 'TAX_EQUIVALENT_YIELD',
              'TENDER' : 'YIELD_TO_TENDER_DATE',
              'TRUE' : 'TRUE_YIELD',
              'VALUE1/32' : 'YIELD_VALUE_OF_1_32',
              'WORST' : 'YIELD_TO_WORST'
            }
          },
  '236' : { name: 'Yield', type: 'percentage' },
  '237' : { name: 'TotalTakedown', type: 'amt' },
  '238' : { name: 'Concession', type: 'amt' },
  '239' : { name: 'RepoCollateralSecurityType', type: 'string' },
  '240' : { name: 'RedemptionDate', type: 'localmktdate' },
  '241' : { name: 'UnderlyingCouponPaymentDate', type: 'localmktdate' },
  '242' : { name: 'UnderlyingIssueDate', type: 'localmktdate' },
  '243' : { name: 'UnderlyingRepoCollateralSecurityType', type: 'string' },
  '244' : { name: 'UnderlyingRepurchaseTerm', type: 'int' },
  '245' : { name: 'UnderlyingRepurchaseRate', type: 'percentage' },
  '246' : { name: 'UnderlyingFactor', type: 'float' },
  '247' : { name: 'UnderlyingRedemptionDate', type: 'localmktdate' },
  '248' : { name: 'LegCouponPaymentDate', type: 'localmktdate' },
  '249' : { name: 'LegIssueDate', type: 'localmktdate' },
  '250' : { name: 'LegRepoCollateralSecurityType', type: 'string' },
  '251' : { name: 'LegRepurchaseTerm', type: 'int' },
  '252' : { name: 'LegRepurchaseRate', type: 'percentage' },
  '253' : { name: 'LegFactor', type: 'float' },
  '254' : { name: 'LegRedemptionDate', type: 'localmktdate' },
  '255' : { name: 'CreditRating', type: 'string' },
  '256' : { name: 'UnderlyingCreditRating', type: 'string' },
  '257' : { name: 'LegCreditRating', type: 'string' },
  '258' : { name: 'TradedFlatSwitch', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '259' : { name: 'BasisFeatureDate', type: 'localmktdate' },
  '260' : { name: 'BasisFeaturePrice', type: 'price' },
  '262' : { name: 'MDReqID', type: 'string' },
  '263' : { name: 'SubscriptionRequestType', type: 'char',
            enums: {
              '0' : 'SNAPSHOT',
              '1' : 'SNAPSHOT_PLUS_UPDATES',
              '2' : 'DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST'
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
              '0' : 'BID',
              '1' : 'OFFER',
              '2' : 'TRADE',
              '3' : 'INDEX_VALUE',
              '4' : 'OPENING_PRICE',
              '5' : 'CLOSING_PRICE',
              '6' : 'SETTLEMENT_PRICE',
              '7' : 'TRADING_SESSION_HIGH_PRICE',
              '8' : 'TRADING_SESSION_LOW_PRICE',
              '9' : 'TRADING_SESSION_VWAP_PRICE',
              'A' : 'IMBALANCE',
              'B' : 'TRADE_VOLUME',
              'C' : 'OPEN_INTEREST'
            }
          },
  '270' : { name: 'MDEntryPx', type: 'price' },
  '271' : { name: 'MDEntrySize', type: 'qty' },
  '272' : { name: 'MDEntryDate', type: 'utcdateonly' },
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
              'A' : 'OPEN',
              'B' : 'CLOSED',
              'C' : 'EXCHANGE_BEST',
              'D' : 'CONSOLIDATED_BEST',
              'E' : 'LOCKED',
              'F' : 'CROSSED',
              'G' : 'DEPTH',
              'H' : 'FAST_TRADING',
              'I' : 'NON_FIRM'
            }
          },
  '277' : { name: 'TradeCondition', type: 'multiplevaluestring',
            enums: {
              'A' : 'CASH',
              'B' : 'AVERAGE_PRICE_TRADE',
              'C' : 'CASH_TRADE',
              'D' : 'NEXT_DAY',
              'E' : 'OPENING',
              'F' : 'INTRADAY_TRADE_DETAIL',
              'G' : 'RULE_127_TRADE',
              'H' : 'RULE_155_TRADE',
              'I' : 'SOLD_LAST',
              'J' : 'NEXT_DAY_TRADE',
              'K' : 'OPENED',
              'L' : 'SELLER',
              'M' : 'SOLD',
              'N' : 'STOPPED_STOCK',
              'P' : 'IMBALANCE_MORE_BUYERS',
              'Q' : 'IMBALANCE_MORE_SELLERS',
              'R' : 'OPENING_PRICE'
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
              '0' : 'UNKNOWN_SYMBOL',
              '1' : 'DUPLICATE_MDREQID',
              '2' : 'INSUFFICIENT_BANDWIDTH',
              '3' : 'INSUFFICIENT_PERMISSIONS',
              '4' : 'UNSUPPORTED_SUBSCRIPTIONREQUESTTYPE',
              '5' : 'UNSUPPORTED_MARKETDEPTH',
              '6' : 'UNSUPPORTED_MDUPDATETYPE',
              '7' : 'UNSUPPORTED_AGGREGATEDBOOK',
              '8' : 'UNSUPPORTED_MDENTRYTYPE',
              '9' : 'UNSUPPORTED_TRADINGSESSIONID',
              'A' : 'UNSUPPORTED_SCOPE',
              'B' : 'UNSUPPORTED_OPENCLOSESETTLEFLAG',
              'C' : 'UNSUPPORTED_MDIMPLICITDELETE'
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
  '286' : { name: 'OpenCloseSettlFlag', type: 'multiplevaluestring',
            enums: {
              '0' : 'DAILY_OPEN',
              '1' : 'SESSION_OPEN',
              '2' : 'DELIVERY_SETTLEMENT_ENTRY',
              '3' : 'EXPECTED_ENTRY',
              '4' : 'ENTRY_FROM_PREVIOUS_BUSINESS_DAY',
              '5' : 'THEORETICAL_PRICE_VALUE'
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
              'A' : 'EX_DIVIDEND',
              'B' : 'EX_DISTRIBUTION',
              'C' : 'EX_RIGHTS',
              'D' : 'NEW',
              'E' : 'EX_INTEREST'
            }
          },
  '293' : { name: 'DefBidSize', type: 'qty' },
  '294' : { name: 'DefOfferSize', type: 'qty' },
  '295' : { name: 'NoQuoteEntries', type: 'numingroup' },
  '296' : { name: 'NoQuoteSets', type: 'numingroup' },
  '297' : { name: 'QuoteStatus', type: 'int',
            enums: {
              '0' : 'ACCEPTED',
              '1' : 'CANCELED_FOR_SYMBOL',
              '2' : 'CANCELED_FOR_SECURITY_TYPE',
              '3' : 'CANCELED_FOR_UNDERLYING',
              '4' : 'CANCELED_ALL',
              '5' : 'REJECTED',
              '6' : 'REMOVED_FROM_MARKET',
              '7' : 'EXPIRED',
              '8' : 'QUERY',
              '9' : 'QUOTE_NOT_FOUND',
              '10' : 'PENDING',
              '11' : 'PASS',
              '12' : 'LOCKED_MARKET_WARNING',
              '13' : 'CROSS_MARKET_WARNING',
              '14' : 'CANCELED_DUE_TO_LOCK_MARKET',
              '15' : 'CANCELED_DUE_TO_CROSS_MARKET'
            }
          },
  '298' : { name: 'QuoteCancelType', type: 'int',
            enums: {
              '1' : 'CANCEL_FOR_SYMBOL',
              '2' : 'CANCEL_FOR_SECURITY_TYPE',
              '3' : 'CANCEL_FOR_UNDERLYING_SYMBOL',
              '4' : 'CANCEL_ALL_QUOTES'
            }
          },
  '299' : { name: 'QuoteEntryID', type: 'string' },
  '300' : { name: 'QuoteRejectReason', type: 'int',
            enums: {
              '1' : 'UNKNOWN_SYMBOL',
              '2' : 'EXCHANGE',
              '3' : 'QUOTE_REQUEST_EXCEEDS_LIMIT',
              '4' : 'TOO_LATE_TO_ENTER',
              '5' : 'UNKNOWN_QUOTE',
              '6' : 'DUPLICATE_QUOTE',
              '7' : 'INVALID_BID_ASK_SPREAD',
              '8' : 'INVALID_PRICE',
              '9' : 'NOT_AUTHORIZED_TO_QUOTE_SECURITY',
              '99' : 'OTHER'
            }
          },
  '301' : { name: 'QuoteResponseLevel', type: 'int',
            enums: {
              '0' : 'NO_ACKNOWLEDGEMENT',
              '1' : 'ACKNOWLEDGE_ONLY_NEGATIVE_OR_ERRONEOUS_QUOTES',
              '2' : 'ACKNOWLEDGE_EACH_QUOTE_MESSAGES'
            }
          },
  '302' : { name: 'QuoteSetID', type: 'string' },
  '303' : { name: 'QuoteRequestType', type: 'int',
            enums: {
              '1' : 'MANUAL',
              '2' : 'AUTOMATIC'
            }
          },
  '304' : { name: 'TotNoQuoteEntries', type: 'int' },
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
  '318' : { name: 'UnderlyingCurrency', type: 'currency' },
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
              '1' : 'ACCEPT_SECURITY_PROPOSAL_AS_IS',
              '2' : 'ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE',
              '5' : 'REJECT_SECURITY_PROPOSAL',
              '6' : 'CAN_NOT_MATCH_SELECTION_CRITERIA'
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
              '1' : 'OPENING_DELAY',
              '2' : 'TRADING_HALT',
              '3' : 'RESUME',
              '4' : 'NO_OPEN_NO_RESUME',
              '5' : 'PRICE_INDICATION',
              '6' : 'TRADING_RANGE_INDICATION',
              '7' : 'MARKET_IMBALANCE_BUY',
              '8' : 'MARKET_IMBALANCE_SELL',
              '9' : 'MARKET_ON_CLOSE_IMBALANCE_BUY',
              '10' : 'MARKET_ON_CLOSE_IMBALANCE_SELL',
              '12' : 'NO_MARKET_IMBALANCE',
              '13' : 'NO_MARKET_ON_CLOSE_IMBALANCE',
              '14' : 'ITS_PRE_OPENING',
              '15' : 'NEW_PRICE_INDICATION',
              '16' : 'TRADE_DISSEMINATION_TIME',
              '17' : 'READY_TO_TRADE',
              '18' : 'NOT_AVAILABLE_FOR_TRADING',
              '19' : 'NOT_TRADED_ON_THIS_MARKET',
              '20' : 'UNKNOWN_OR_INVALID',
              '21' : 'PRE_OPEN',
              '22' : 'OPENING_ROTATION',
              '23' : 'FAST_MARKET'
            }
          },
  '327' : { name: 'HaltReasonChar', type: 'char',
            enums: {
              'I' : 'ORDER_IMBALANCE',
              'X' : 'EQUIPMENT_CHANGEOVER',
              'P' : 'NEWS_PENDING',
              'D' : 'NEWS_DISSEMINATION',
              'E' : 'ORDER_INFLUX',
              'M' : 'ADDITIONAL_INFORMATION'
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
              '1' : 'ELECTRONIC',
              '2' : 'OPEN_OUTCRY',
              '3' : 'TWO_PARTY'
            }
          },
  '339' : { name: 'TradSesMode', type: 'int',
            enums: {
              '1' : 'TESTING',
              '2' : 'SIMULATED',
              '3' : 'PRODUCTION'
            }
          },
  '340' : { name: 'TradSesStatus', type: 'int',
            enums: {
              '0' : 'UNKNOWN',
              '1' : 'HALTED',
              '2' : 'OPEN',
              '3' : 'CLOSED',
              '4' : 'PRE_OPEN',
              '5' : 'PRE_CLOSE',
              '6' : 'REQUEST_REJECTED'
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
              'ISO-2022-JP' : 'JIS',
              'EUC-JP' : 'EUC',
              'Shift_JIS' : 'FOR_USING_SJIS',
              'UTF-8' : 'UNICODE'
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
  '371' : { name: 'RefTagID', type: 'int' },
  '372' : { name: 'RefMsgType', type: 'string' },
  '373' : { name: 'SessionRejectReason', type: 'int',
            enums: {
              '0' : 'INVALID_TAG_NUMBER',
              '1' : 'REQUIRED_TAG_MISSING',
              '2' : 'TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE',
              '3' : 'UNDEFINED_TAG',
              '4' : 'TAG_SPECIFIED_WITHOUT_A_VALUE',
              '5' : 'VALUE_IS_INCORRECT',
              '6' : 'INCORRECT_DATA_FORMAT_FOR_VALUE',
              '7' : 'DECRYPTION_PROBLEM',
              '8' : 'SIGNATURE_PROBLEM',
              '9' : 'COMPID_PROBLEM',
              '10' : 'SENDINGTIME_ACCURACY_PROBLEM',
              '11' : 'INVALID_MSGTYPE',
              '12' : 'XML_VALIDATION_ERROR',
              '13' : 'TAG_APPEARS_MORE_THAN_ONCE',
              '14' : 'TAG_SPECIFIED_OUT_OF_REQUIRED_ORDER',
              '15' : 'REPEATING_GROUP_FIELDS_OUT_OF_ORDER',
              '16' : 'INCORRECT_NUMINGROUP_COUNT_FOR_REPEATING_GROUP',
              '17' : 'NON_DATA_VALUE_INCLUDES_FIELD_DELIMITER',
              '99' : 'OTHER'
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
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '378' : { name: 'ExecRestatementReason', type: 'int',
            enums: {
              '0' : 'GT_CORPORATE_ACTION',
              '1' : 'GT_RENEWAL',
              '2' : 'VERBAL_CHANGE',
              '3' : 'REPRICING_OF_ORDER',
              '4' : 'BROKER_OPTION',
              '5' : 'PARTIAL_DECLINE_OF_ORDERQTY',
              '6' : 'CANCEL_ON_TRADING_HALT',
              '7' : 'CANCEL_ON_SYSTEM_FAILURE',
              '8' : 'MARKET',
              '9' : 'CANCELED_NOT_BEST',
              '10' : 'WAREHOUSE_RECAP',
              '99' : 'OTHER'
            }
          },
  '379' : { name: 'BusinessRejectRefID', type: 'string' },
  '380' : { name: 'BusinessRejectReason', type: 'int',
            enums: {
              '0' : 'OTHER',
              '1' : 'UNKOWN_ID',
              '2' : 'UNKNOWN_SECURITY',
              '3' : 'UNSUPPORTED_MESSAGE_TYPE',
              '4' : 'APPLICATION_NOT_AVAILABLE',
              '5' : 'CONDITIONALLY_REQUIRED_FIELD_MISSING',
              '6' : 'NOT_AUTHORIZED',
              '7' : 'DELIVERTO_FIRM_NOT_AVAILABLE_AT_THIS_TIME'
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
              '5' : 'RELATED_TO_LAST_TRADE_PRICE',
              '6' : 'RELATED_TO_VWAP'
            }
          },
  '389' : { name: 'DiscretionOffsetValue', type: 'float' },
  '390' : { name: 'BidID', type: 'string' },
  '391' : { name: 'ClientBidID', type: 'string' },
  '392' : { name: 'ListName', type: 'string' },
  '393' : { name: 'TotNoRelatedSym', type: 'int' },
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
              '1' : 'SECTOR',
              '2' : 'COUNTRY',
              '3' : 'INDEX'
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
              '1' : '5DAY_MOVING_AVERAGE',
              '2' : '20_DAY_MOVING_AVERAGE',
              '3' : 'NORMAL_MARKET_SIZE',
              '4' : 'OTHER'
            }
          },
  '410' : { name: 'WtAverageLiquidity', type: 'percentage' },
  '411' : { name: 'ExchangeForPhysical', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '412' : { name: 'OutMainCntryUIndex', type: 'amt' },
  '413' : { name: 'CrossPercent', type: 'percentage' },
  '414' : { name: 'ProgRptReqs', type: 'int',
            enums: {
              '1' : 'BUYSIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUSREQUEST',
              '2' : 'SELLSIDE_PERIODICALLY_SENDS_STATUS_USING_LISTSTATUS_PERIOD_OPTIONALLY_SPECIFIED_IN_PROGRESSPERIOD',
              '3' : 'REAL_TIME_EXECUTION_REPORTS'
            }
          },
  '415' : { name: 'ProgPeriodInterval', type: 'int' },
  '416' : { name: 'IncTaxInd', type: 'int',
            enums: {
              '1' : 'NET',
              '2' : 'GROSS'
            }
          },
  '417' : { name: 'NumBidders', type: 'int' },
  '418' : { name: 'BidTradeType', type: 'char',
            enums: {
              'R' : 'RISK_TRADE',
              'G' : 'VWAP_GUARANTEE',
              'A' : 'AGENCY',
              'J' : 'GUARANTEED_CLOSE'
            }
          },
  '419' : { name: 'BasisPxType', type: 'char',
            enums: {
              '2' : 'CLOSING_PRICE_AT_MORNING_SESSION',
              '3' : 'CLOSING_PRICE',
              '4' : 'CURRENT_PRICE',
              '5' : 'SQ',
              '6' : 'VWAP_THROUGH_A_DAY',
              '7' : 'VWAP_THROUGH_A_MORNING_SESSION',
              '8' : 'VWAP_THROUGH_AN_AFTERNOON_SESSION',
              '9' : 'VWAP_THROUGH_A_DAY_EXCEPT_YORI',
              'A' : 'VWAP_THROUGH_A_MORNING_SESSION_EXCEPT_YORI',
              'B' : 'VWAP_THROUGH_AN_AFTERNOON_SESSION_EXCEPT_YORI',
              'C' : 'STRIKE',
              'D' : 'OPEN',
              'Z' : 'OTHERS'
            }
          },
  '420' : { name: 'NoBidComponents', type: 'numingroup' },
  '421' : { name: 'Country', type: 'country' },
  '422' : { name: 'TotNoStrikes', type: 'int' },
  '423' : { name: 'PriceType', type: 'int',
            enums: {
              '1' : 'PERCENTAGE',
              '2' : 'PER_UNIT',
              '3' : 'FIXED_AMOUNT',
              '4' : 'DISCOUNT_PERCENTAGE_POINTS_BELOW_PAR',
              '5' : 'PREMIUM_PERCENTAGE_POINTS_OVER_PAR',
              '6' : 'SPREAD',
              '7' : 'TED_PRICE',
              '8' : 'TED_YIELD',
              '9' : 'YIELD',
              '10' : 'FIXED_CABINET_TRADE_PRICE',
              '11' : 'VARIABLE_CABINET_TRADE_PRICE'
            }
          },
  '424' : { name: 'DayOrderQty', type: 'qty' },
  '425' : { name: 'DayCumQty', type: 'qty' },
  '426' : { name: 'DayAvgPx', type: 'price' },
  '427' : { name: 'GTBookingInst', type: 'int',
            enums: {
              '0' : 'BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION',
              '1' : 'ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES',
              '2' : 'ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE'
            }
          },
  '428' : { name: 'NoStrikes', type: 'numingroup' },
  '429' : { name: 'ListStatusType', type: 'int',
            enums: {
              '1' : 'ACK',
              '2' : 'RESPONSE',
              '3' : 'TIMED',
              '4' : 'EXECSTARTED',
              '5' : 'ALLDONE',
              '6' : 'ALERT'
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
              '1' : 'INBIDDINGPROCESS',
              '2' : 'RECEIVEDFOREXECUTION',
              '3' : 'EXECUTING',
              '4' : 'CANCELING',
              '5' : 'ALERT',
              '6' : 'ALL_DONE',
              '7' : 'REJECT'
            }
          },
  '432' : { name: 'ExpireDate', type: 'localmktdate' },
  '433' : { name: 'ListExecInstType', type: 'char',
            enums: {
              '1' : 'IMMEDIATE',
              '2' : 'WAIT_FOR_EXECUTE_INSTRUCTION',
              '3' : 'EXCHANGE_SWITCH_CIV_ORDER_SELL_DRIVEN',
              '4' : 'EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_TOP_UP',
              '5' : 'EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_WITHDRAW'
            }
          },
  '434' : { name: 'CxlRejResponseTo', type: 'char',
            enums: {
              '1' : 'ORDER_CANCEL_REQUEST',
              '2' : 'ORDER_CANCEL_REPLACE_REQUEST'
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
              'B' : 'BIC',
              'C' : 'GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER',
              'D' : 'PROPRIETARY_CUSTOM_CODE',
              'E' : 'ISO_COUNTRY_CODE',
              'F' : 'SETTLEMENT_ENTITY_LOCATION',
              'G' : 'MIC',
              'H' : 'CSD_PARTICIPANT_MEMBER_CODE',
              '1' : 'KOREAN_INVESTOR_ID',
              '2' : 'TAIWANESE_QUALIFIED_FOREIGN_INVESTOR_ID_QFII',
              '3' : 'TAIWANESE_TRADING_ACCOUNT',
              '4' : 'MALAYSIAN_CENTRAL_DEPOSITORY',
              '5' : 'CHINESE_B_SHARE',
              '6' : 'UK_NATIONAL_INSURANCE_OR_PENSION_NUMBER',
              '7' : 'US_SOCIAL_SECURITY_NUMBER',
              '8' : 'US_EMPLOYER_IDENTIFICATION_NUMBER',
              '9' : 'AUSTRALIAN_BUSINESS_NUMBER',
              'A' : 'AUSTRALIAN_TAX_FILE_NUMBER',
              'I' : 'DIRECTED_BROKER_THREE_CHARACTER_ACRONYM_AS_DEFINED_IN_ISITC_ETC_BEST_PRACTICE_GUIDELINES_DOCUMENT'
            }
          },
  '448' : { name: 'PartyID', type: 'string' },
  '451' : { name: 'NetChgPrevDay', type: 'priceoffset' },
  '452' : { name: 'PartyRole', type: 'int',
            enums: {
              '1' : 'EXECUTING_FIRM',
              '2' : 'BROKER_OF_CREDIT',
              '3' : 'CLIENT_ID',
              '4' : 'CLEARING_FIRM',
              '5' : 'INVESTOR_ID',
              '6' : 'INTRODUCING_FIRM',
              '7' : 'ENTERING_FIRM',
              '8' : 'LOCATE_LENDING_FIRM',
              '9' : 'FUND_MANAGER_CLIENT_ID',
              '10' : 'SETTLEMENT_LOCATION',
              '11' : 'ORDER_ORIGINATION_TRADER',
              '12' : 'EXECUTING_TRADER',
              '13' : 'ORDER_ORIGINATION_FIRM',
              '14' : 'GIVEUP_CLEARING_FIRM',
              '15' : 'CORRESPONDANT_CLEARING_FIRM',
              '16' : 'EXECUTING_SYSTEM',
              '17' : 'CONTRA_FIRM',
              '18' : 'CONTRA_CLEARING_FIRM',
              '19' : 'SPONSORING_FIRM',
              '20' : 'UNDERLYING_CONTRA_FIRM',
              '21' : 'CLEARING_ORGANIZATION',
              '22' : 'EXCHANGE',
              '24' : 'CUSTOMER_ACCOUNT',
              '25' : 'CORRESPONDENT_CLEARING_ORGANIZATION',
              '26' : 'CORRESPONDENT_BROKER',
              '27' : 'BUYER_SELLER',
              '28' : 'CUSTODIAN',
              '29' : 'INTERMEDIARY',
              '30' : 'AGENT',
              '31' : 'SUB_CUSTODIAN',
              '32' : 'BENEFICIARY',
              '33' : 'INTERESTED_PARTY',
              '34' : 'REGULATORY_BODY',
              '35' : 'LIQUIDITY_PROVIDER',
              '36' : 'ENTERING_TRADER',
              '37' : 'CONTRA_TRADER',
              '38' : 'POSITION_ACCOUNT'
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
              '1' : 'AGENCY',
              '2' : 'COMMODITY',
              '3' : 'CORPORATE',
              '4' : 'CURRENCY',
              '5' : 'EQUITY',
              '6' : 'GOVERNMENT',
              '7' : 'INDEX',
              '8' : 'LOAN',
              '9' : 'MONEYMARKET',
              '10' : 'MORTGAGE',
              '11' : 'MUNICIPAL',
              '12' : 'OTHER',
              '13' : 'FINANCING'
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
  '477' : { name: 'DistribPaymentMethod', type: 'int',
            enums: {
              '1' : 'CREST',
              '2' : 'NSCC',
              '3' : 'EUROCLEAR',
              '4' : 'CLEARSTREAM',
              '5' : 'CHEQUE',
              '6' : 'TELEGRAPHIC_TRANSFER',
              '7' : 'FEDWIRE',
              '8' : 'DIRECT_CREDIT',
              '9' : 'ACH_CREDIT',
              '10' : 'BPAY',
              '11' : 'HIGH_VALUE_CLEARING_SYSTEM',
              '12' : 'REINVEST_IN_FUND'
            }
          },
  '478' : { name: 'CashDistribCurr', type: 'currency' },
  '479' : { name: 'CommCurrency', type: 'currency' },
  '480' : { name: 'CancellationRights', type: 'char',
            enums: {
              'Y' : 'YES',
              'N' : 'NO_EXECUTION_ONLY',
              'M' : 'NO_WAIVER_AGREEMENT',
              'O' : 'NO_INSTITUTIONAL'
            }
          },
  '481' : { name: 'MoneyLaunderingStatus', type: 'char',
            enums: {
              'Y' : 'PASSED',
              'N' : 'NOT_CHECKED',
              '1' : 'EXEMPT_BELOW_THE_LIMIT',
              '2' : 'EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION',
              '3' : 'EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION'
            }
          },
  '482' : { name: 'MailingInst', type: 'string' },
  '483' : { name: 'TransBkdTime', type: 'utctimestamp' },
  '484' : { name: 'ExecPriceType', type: 'char',
            enums: {
              'B' : 'BID_PRICE',
              'C' : 'CREATION_PRICE',
              'D' : 'CREATION_PRICE_PLUS_ADJUSTMENT',
              'E' : 'CREATION_PRICE_PLUS_ADJUSTMENT_AMOUNT',
              'O' : 'OFFER_PRICE',
              'P' : 'OFFER_PRICE_MINUS_ADJUSTMENT',
              'Q' : 'OFFER_PRICE_MINUS_ADJUSTMENT_AMOUNT',
              'S' : 'SINGLE_PRICE'
            }
          },
  '485' : { name: 'ExecPriceAdjustment', type: 'float' },
  '486' : { name: 'DateOfBirth', type: 'localmktdate' },
  '487' : { name: 'TradeReportTransType', type: 'int' },
  '488' : { name: 'CardHolderName', type: 'string' },
  '489' : { name: 'CardNumber', type: 'string' },
  '490' : { name: 'CardExpDate', type: 'localmktdate' },
  '491' : { name: 'CardIssNum', type: 'string' },
  '492' : { name: 'PaymentMethod', type: 'int',
            enums: {
              '1' : 'CREST',
              '2' : 'NSCC',
              '3' : 'EUROCLEAR',
              '4' : 'CLEARSTREAM',
              '5' : 'CHEQUE',
              '6' : 'TELEGRAPHIC_TRANSFER',
              '7' : 'FEDWIRE',
              '8' : 'DEBIT_CARD',
              '9' : 'DIRECT_DEBIT',
              '10' : 'DIRECT_CREDIT',
              '11' : 'CREDIT_CARD',
              '12' : 'ACH_DEBIT',
              '13' : 'ACH_CREDIT',
              '14' : 'BPAY',
              '15' : 'HIGH_VALUE_CLEARING_SYSTEM'
            }
          },
  '493' : { name: 'RegistAcctType', type: 'string' },
  '494' : { name: 'Designation', type: 'string' },
  '495' : { name: 'TaxAdvantageType', type: 'int',
            enums: {
              '0' : 'NONE_NOT_APPLICABLE',
              '1' : 'MAXI_ISA',
              '2' : 'TESSA',
              '3' : 'MINI_CASH_ISA',
              '4' : 'MINI_STOCKS_AND_SHARES_ISA',
              '5' : 'MINI_INSURANCE_ISA',
              '6' : 'CURRENT_YEAR_PAYMENT',
              '7' : 'PRIOR_YEAR_PAYMENT',
              '8' : 'ASSET_TRANSFER',
              '9' : 'EMPLOYEE',
              '10' : 'EMPLOYEE_CURRENT_YEAR',
              '11' : 'EMPLOYER',
              '12' : 'EMPLOYER_CURRENT_YEAR',
              '13' : 'NON_FUND_PROTOTYPE_IRA',
              '14' : 'NON_FUND_QUALIFIED_PLAN',
              '15' : 'DEFINED_CONTRIBUTION_PLAN',
              '16' : 'INDIVIDUAL_RETIREMENT_ACCOUNT',
              '17' : 'INDIVIDUAL_RETIREMENT_ACCOUNT_ROLLOVER',
              '18' : 'KEOGH',
              '19' : 'PROFIT_SHARING_PLAN',
              '20' : '401K',
              '21' : 'SELF_DIRECTED_IRA',
              '22' : '403',
              '23' : '457',
              '24' : 'ROTH_IRA_24',
              '25' : 'ROTH_IRA_25',
              '26' : 'ROTH_CONVERSION_IRA_26',
              '27' : 'ROTH_CONVERSION_IRA_27',
              '28' : 'EDUCATION_IRA_28',
              '29' : 'EDUCATION_IRA_29'
            }
          },
  '496' : { name: 'RegistRejReasonText', type: 'string' },
  '497' : { name: 'FundRenewWaiv', type: 'char',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '498' : { name: 'CashDistribAgentName', type: 'string' },
  '499' : { name: 'CashDistribAgentCode', type: 'string' },
  '500' : { name: 'CashDistribAgentAcctNumber', type: 'string' },
  '501' : { name: 'CashDistribPayRef', type: 'string' },
  '502' : { name: 'CashDistribAgentAcctName', type: 'string' },
  '503' : { name: 'CardStartDate', type: 'localmktdate' },
  '504' : { name: 'PaymentDate', type: 'localmktdate' },
  '505' : { name: 'PaymentRemitterID', type: 'string' },
  '506' : { name: 'RegistStatus', type: 'char',
            enums: {
              'A' : 'ACCEPTED',
              'R' : 'REJECTED',
              'H' : 'HELD',
              'N' : 'REMINDER_IE_REGISTRATION_INSTRUCTIONS_ARE_STILL_OUTSTANDING'
            }
          },
  '507' : { name: 'RegistRejReasonCode', type: 'int',
            enums: {
              '1' : 'INVALID_UNACCEPTABLE_ACCOUNT_TYPE',
              '2' : 'INVALID_UNACCEPTABLE_TAX_EXEMPT_TYPE',
              '3' : 'INVALID_UNACCEPTABLE_OWNERSHIP_TYPE',
              '4' : 'INVALID_UNACCEPTABLE_NO_REG_DETLS',
              '5' : 'INVALID_UNACCEPTABLE_REG_SEQ_NO',
              '6' : 'INVALID_UNACCEPTABLE_REG_DTLS',
              '7' : 'INVALID_UNACCEPTABLE_MAILING_DTLS',
              '8' : 'INVALID_UNACCEPTABLE_MAILING_INST',
              '9' : 'INVALID_UNACCEPTABLE_INVESTOR_ID',
              '10' : 'INVALID_UNACCEPTABLE_INVESTOR_ID_SOURCE',
              '11' : 'INVALID_UNACCEPTABLE_DATE_OF_BIRTH',
              '12' : 'INVALID_UNACCEPTABLE_INVESTOR_COUNTRY_OF_RESIDENCE',
              '13' : 'INVALID_UNACCEPTABLE_NODISTRIBINSTNS',
              '14' : 'INVALID_UNACCEPTABLE_DISTRIB_PERCENTAGE',
              '15' : 'INVALID_UNACCEPTABLE_DISTRIB_PAYMENT_METHOD',
              '16' : 'INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NAME',
              '17' : 'INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_CODE',
              '18' : 'INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NUM',
              '99' : 'OTHER'
            }
          },
  '508' : { name: 'RegistRefID', type: 'string' },
  '509' : { name: 'RegistDtls', type: 'string' },
  '510' : { name: 'NoDistribInsts', type: 'numingroup' },
  '511' : { name: 'RegistEmail', type: 'string' },
  '512' : { name: 'DistribPercentage', type: 'percentage' },
  '513' : { name: 'RegistID', type: 'string' },
  '514' : { name: 'RegistTransType', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'REPLACE',
              '2' : 'CANCEL'
            }
          },
  '515' : { name: 'ExecValuationPoint', type: 'utctimestamp' },
  '516' : { name: 'OrderPercent', type: 'percentage' },
  '517' : { name: 'OwnershipType', type: 'char',
            enums: {
              'J' : 'JOINT_INVESTORS',
              'T' : 'TENANTS_IN_COMMON',
              '2' : 'JOINT_TRUSTEES'
            }
          },
  '518' : { name: 'NoContAmts', type: 'numingroup' },
  '519' : { name: 'ContAmtType', type: 'int',
            enums: {
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
              '13' : 'FUND_BASED_RENEWAL_COMMISSION_AMOUNT_13',
              '14' : 'FUND_BASED_RENEWAL_COMMISSION_AMOUNT_14',
              '15' : 'NET_SETTLEMENT_AMOUNT'
            }
          },
  '520' : { name: 'ContAmtValue', type: 'float' },
  '521' : { name: 'ContAmtCurr', type: 'currency' },
  '522' : { name: 'OwnerType', type: 'int',
            enums: {
              '1' : 'INDIVIDUAL_INVESTOR',
              '2' : 'PUBLIC_COMPANY',
              '3' : 'PRIVATE_COMPANY',
              '4' : 'INDIVIDUAL_TRUSTEE',
              '5' : 'COMPANY_TRUSTEE',
              '6' : 'PENSION_PLAN',
              '7' : 'CUSTODIAN_UNDER_GIFTS_TO_MINORS_ACT',
              '8' : 'TRUSTS',
              '9' : 'FIDUCIARIES',
              '10' : 'NETWORKING_SUB_ACCOUNT',
              '11' : 'NON_PROFIT_ORGANIZATION',
              '12' : 'CORPORATE_BODY',
              '13' : 'NOMINEE'
            }
          },
  '523' : { name: 'PartySubID', type: 'string' },
  '524' : { name: 'NestedPartyID', type: 'string' },
  '525' : { name: 'NestedPartyIDSource', type: 'char' },
  '526' : { name: 'SecondaryClOrdID', type: 'string' },
  '527' : { name: 'SecondaryExecID', type: 'string' },
  '528' : { name: 'OrderCapacity', type: 'char',
            enums: {
              'A' : 'AGENCY',
              'G' : 'PROPRIETARY',
              'I' : 'INDIVIDUAL',
              'P' : 'PRINCIPAL',
              'R' : 'RISKLESS_PRINCIPAL',
              'W' : 'AGENT_FOR_OTHER_MEMBER'
            }
          },
  '529' : { name: 'OrderRestrictions', type: 'multiplevaluestring',
            enums: {
              '1' : 'PROGRAM_TRADE',
              '2' : 'INDEX_ARBITRAGE',
              '3' : 'NON_INDEX_ARBITRAGE',
              '4' : 'COMPETING_MARKET_MAKER',
              '5' : 'ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY',
              '6' : 'ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY',
              '7' : 'FOREIGN_ENTITY',
              '8' : 'EXTERNAL_MARKET_PARTICIPANT',
              '9' : 'EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE',
              'A' : 'RISKLESS_ARBITRAGE'
            }
          },
  '530' : { name: 'MassCancelRequestType', type: 'char',
            enums: {
              '1' : 'CANCEL_ORDERS_FOR_A_SECURITY',
              '2' : 'CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY',
              '3' : 'CANCEL_ORDERS_FOR_A_PRODUCT',
              '4' : 'CANCEL_ORDERS_FOR_A_CFICODE',
              '5' : 'CANCEL_ORDERS_FOR_A_SECURITYTYPE',
              '6' : 'CANCEL_ORDERS_FOR_A_TRADING_SESSION',
              '7' : 'CANCEL_ALL_ORDERS'
            }
          },
  '531' : { name: 'MassCancelResponse', type: 'char',
            enums: {
              '0' : 'CANCEL_REQUEST_REJECTED',
              '1' : 'CANCEL_ORDERS_FOR_A_SECURITY',
              '2' : 'CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY',
              '3' : 'CANCEL_ORDERS_FOR_A_PRODUCT',
              '4' : 'CANCEL_ORDERS_FOR_A_CFICODE',
              '5' : 'CANCEL_ORDERS_FOR_A_SECURITYTYPE',
              '6' : 'CANCEL_ORDERS_FOR_A_TRADING_SESSION',
              '7' : 'CANCEL_ALL_ORDERS'
            }
          },
  '532' : { name: 'MassCancelRejectReason', type: 'char',
            enums: {
              '0' : 'MASS_CANCEL_NOT_SUPPORTED',
              '1' : 'INVALID_OR_UNKNOWN_SECURITY',
              '2' : 'INVALID_OR_UNKNOWN_UNDERLYING',
              '3' : 'INVALID_OR_UNKNOWN_PRODUCT',
              '4' : 'INVALID_OR_UNKNOWN_CFICODE',
              '5' : 'INVALID_OR_UNKNOWN_SECURITY_TYPE',
              '6' : 'INVALID_OR_UNKNOWN_TRADING_SESSION',
              '99' : 'OTHER'
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
              '2' : 'RESTRICTED_TRADEABLE',
              '3' : 'COUNTER'
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
              '1' : 'CASH',
              '2' : 'MARGIN_OPEN',
              '3' : 'MARGIN_CLOSE'
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
              '2' : 'CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED_ONE_SIDE_IS_FULLY_EXECUTED_THE_OTHER_SIDE_IS_PARTIALLY_EXECUTED_WITH_THE_REMAINDER_BEING_CANCELLED_THIS_IS_EQUIVALENT_TO_AN_IMMEDIATE_OR_CANCEL_ON_THE_OTHER_SIDE_NOTE_THE_CROSSPRIORITZATION',
              '3' : 'CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE_ONE_SIDE_OF_THE_CROSS_IS_FULLY_EXECUTED',
              '4' : 'CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE_IN_THE_CASE_OTHER_ORDERS_EXIST_WITH_THE_SAME_PRICE_THE_QUANTITY_OF_THE_CROSS_IS_EXECUTED_AGAINST_THE_EXISTING_ORDERS_AND_QUOTES_THE_REMAINDER_OF_THE_CROSS_IS_EXECUTED_AGAINST_THE_OTHER_SIDE_OF_THE_CROSS_THE_TWO_SIDES_POTENTIALLY_HAVE_DIFFERENT_QUANTITIES'
            }
          },
  '550' : { name: 'CrossPrioritization', type: 'int',
            enums: {
              '0' : 'NONE',
              '1' : 'BUY_SIDE_IS_PRIORITIZED',
              '2' : 'SELL_SIDE_IS_PRIORITIZED'
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
  '557' : { name: 'TotNoSecurityTypes', type: 'int' },
  '558' : { name: 'NoSecurityTypes', type: 'numingroup' },
  '559' : { name: 'SecurityListRequestType', type: 'int',
            enums: {
              '0' : 'SYMBOL',
              '1' : 'SECURITYTYPE_AND_OR_CFICODE',
              '2' : 'PRODUCT',
              '3' : 'TRADINGSESSIONID',
              '4' : 'ALL_SECURITIES'
            }
          },
  '560' : { name: 'SecurityRequestResult', type: 'int',
            enums: {
              '0' : 'VALID_REQUEST',
              '1' : 'INVALID_OR_UNSUPPORTED_REQUEST',
              '2' : 'NO_INSTRUMENTS_FOUND_THAT_MATCH_SELECTION_CRITERIA',
              '3' : 'NOT_AUTHORIZED_TO_RETRIEVE_INSTRUMENT_DATA',
              '4' : 'INSTRUMENT_DATA_TEMPORARILY_UNAVAILABLE',
              '5' : 'REQUEST_FOR_INSTRUMENT_DATA_NOT_SUPPORTED'
            }
          },
  '561' : { name: 'RoundLot', type: 'qty' },
  '562' : { name: 'MinTradeVol', type: 'qty' },
  '563' : { name: 'MultiLegRptTypeReq', type: 'int',
            enums: {
              '0' : 'REPORT_BY_MULITLEG_SECURITY_ONLY',
              '1' : 'REPORT_BY_MULTILEG_SECURITY_AND_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY',
              '2' : 'REPORT_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY_ONLY'
            }
          },
  '564' : { name: 'LegPositionEffect', type: 'char' },
  '565' : { name: 'LegCoveredOrUncovered', type: 'int' },
  '566' : { name: 'LegPrice', type: 'price' },
  '567' : { name: 'TradSesStatusRejReason', type: 'int',
            enums: {
              '1' : 'UNKNOWN_OR_INVALID_TRADINGSESSIONID',
              '99' : 'OTHER'
            }
          },
  '568' : { name: 'TradeRequestID', type: 'string' },
  '569' : { name: 'TradeRequestType', type: 'int',
            enums: {
              '0' : 'ALL_TRADES',
              '1' : 'MATCHED_TRADES_MATCHING_CRITERIA_PROVIDED_ON_REQUEST',
              '2' : 'UNMATCHED_TRADES_THAT_MATCH_CRITERIA',
              '3' : 'UNREPORTED_TRADES_THAT_MATCH_CRITERIA',
              '4' : 'ADVISORIES_THAT_MATCH_CRITERIA'
            }
          },
  '570' : { name: 'PreviouslyReported', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
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
              'A1' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_FOUR_BADGES_AND_EXECUTION_TIME',
              'A2' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_FOUR_BADGES',
              'A3' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_TWO_BADGES_AND_EXECUTION_TIME',
              'A4' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_TWO_BADGES',
              'A5' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_EXECUTION_TIME',
              'AQ' : 'COMPARED_RECORDS_RESULTING_FROM_STAMPED_ADVISORIES_OR_SPECIALIST_ACCEPTS_PAIR_OFFS',
              'S1' : 'SUMMARIZED_MATCH_USING_A1_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED',
              'S2' : 'SUMMARIZED_MATCH_USING_A2_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED',
              'S3' : 'SUMMARIZED_MATCH_USING_A3_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED',
              'S4' : 'SUMMARIZED_MATCH_USING_A4_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED',
              'S5' : 'SUMMARIZED_MATCH_USING_A5_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED',
              'M1' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_MINUS_BADGES_AND_TIMES_ACT_M1_MATCH',
              'M2' : 'SUMMARIZED_MATCH_MINUS_BADGES_AND_TIMES_ACT_M2_MATCH',
              'MT' : 'OCS_LOCKED_IN_NON_ACT',
              'M3' : 'ACT_ACCEPTED_TRADE',
              'M4' : 'ACT_DEFAULT_TRADE',
              'M5' : 'ACT_DEFAULT_AFTER_M2',
              'M6' : 'ACT_M6_MATCH'
            }
          },
  '575' : { name: 'OddLot', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '576' : { name: 'NoClearingInstructions', type: 'numingroup' },
  '577' : { name: 'ClearingInstruction', type: 'int',
            enums: {
              '0' : 'PROCESS_NORMALLY',
              '1' : 'EXCLUDE_FROM_ALL_NETTING',
              '2' : 'BILATERAL_NETTING_ONLY',
              '3' : 'EX_CLEARING',
              '4' : 'SPECIAL_TRADE',
              '5' : 'MULTILATERAL_NETTING',
              '6' : 'CLEAR_AGAINST_CENTRAL_COUNTERPARTY',
              '7' : 'EXCLUDE_FROM_CENTRAL_COUNTERPARTY',
              '8' : 'MANUAL_MODE',
              '9' : 'AUTOMATIC_POSTING_MODE',
              '10' : 'AUTOMATIC_GIVE_UP_MODE',
              '11' : 'QUALIFIED_SERVICE_REPRESENTATIVE',
              '12' : 'CUSTOMER_TRADE',
              '13' : 'SELF_CLEARING'
            }
          },
  '578' : { name: 'TradeInputSource', type: 'string' },
  '579' : { name: 'TradeInputDevice', type: 'string' },
  '580' : { name: 'NoDates', type: 'numingroup' },
  '581' : { name: 'AccountType', type: 'int',
            enums: {
              '1' : 'ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS',
              '2' : 'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS',
              '3' : 'HOUSE_TRADER',
              '4' : 'FLOOR_TRADER',
              '6' : 'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED',
              '7' : 'ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED',
              '8' : 'JOINT_BACKOFFICE_ACCOUNT'
            }
          },
  '582' : { name: 'CustOrderCapacity', type: 'int',
            enums: {
              '1' : 'MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT',
              '2' : 'CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT',
              '3' : 'MEMBER_TRADING_FOR_ANOTHER_MEMBER',
              '4' : 'ALL_OTHER'
            }
          },
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
              '7' : 'STATUS_FOR_ALL_ORDERS',
              '8' : 'STATUS_FOR_ORDERS_FOR_A_PARTYID'
            }
          },
  '586' : { name: 'OrigOrdModTime', type: 'utctimestamp' },
  '587' : { name: 'LegSettlType', type: 'char' },
  '588' : { name: 'LegSettlDate', type: 'localmktdate' },
  '589' : { name: 'DayBookingInst', type: 'char',
            enums: {
              '0' : 'CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR',
              '1' : 'SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING',
              '2' : 'ACCUMULATE'
            }
          },
  '590' : { name: 'BookingUnit', type: 'char',
            enums: {
              '0' : 'EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT',
              '1' : 'AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER',
              '2' : 'AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE'
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
              '1' : 'CALCULATED',
              '2' : 'PRELIMINARY',
              '5' : 'READY_TO_BOOK',
              '7' : 'WAREHOUSE_INSTRUCTION',
              '8' : 'REQUEST_TO_INTERMEDIARY'
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
              'B' : 'CBOE_MEMBER',
              'C' : 'NON_MEMBER_AND_CUSTOMER',
              'E' : 'EQUITY_MEMBER_AND_CLEARING_MEMBER',
              'F' : 'FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS',
              'H' : '106H_AND_106J_FIRMS',
              'I' : 'GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS',
              'L' : 'LESSEE_AND_106F_EMPLOYEES',
              'M' : 'ALL_OTHER_OWNERSHIP_TYPES',
              '1' : '1ST_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT',
              '2' : '2ND_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT',
              '3' : '3RD_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT',
              '4' : '4TH_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT',
              '5' : '5TH_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT',
              '9' : '6TH_YEAR_AND_BEYOND_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT'
            }
          },
  '636' : { name: 'WorkingIndicator', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
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
              '6' : 'NOT_AUTHORIZED_TO_REQUEST_QUOTE',
              '7' : 'NO_MATCH_FOR_INQUIRY',
              '8' : 'NO_MARKET_FOR_INSTRUMENT',
              '9' : 'NO_INVENTORY',
              '10' : 'PASS',
              '99' : 'OTHER'
            }
          },
  '659' : { name: 'SideComplianceID', type: 'string' },
  '660' : { name: 'AcctIDSource', type: 'int',
            enums: {
              '1' : 'BIC',
              '2' : 'SID_CODE',
              '3' : 'TFM',
              '4' : 'OMGEO',
              '5' : 'DTCC_CODE',
              '99' : 'OTHER'
            }
          },
  '661' : { name: 'AllocAcctIDSource', type: 'int' },
  '662' : { name: 'BenchmarkPrice', type: 'price' },
  '663' : { name: 'BenchmarkPriceType', type: 'int' },
  '664' : { name: 'ConfirmID', type: 'string' },
  '665' : { name: 'ConfirmStatus', type: 'int',
            enums: {
              '1' : 'RECEIVED',
              '2' : 'MISMATCHED_ACCOUNT',
              '3' : 'MISSING_SETTLEMENT_INSTRUCTIONS',
              '4' : 'CONFIRMED',
              '5' : 'REQUEST_REJECTED'
            }
          },
  '666' : { name: 'ConfirmTransType', type: 'int',
            enums: {
              '0' : 'NEW',
              '1' : 'REPLACE',
              '2' : 'CANCEL'
            }
          },
  '667' : { name: 'ContractSettlMonth', type: 'monthyear' },
  '668' : { name: 'DeliveryForm', type: 'int',
            enums: {
              '1' : 'BOOKENTRY',
              '2' : 'BEARER'
            }
          },
  '669' : { name: 'LastParPx', type: 'price' },
  '670' : { name: 'NoLegAllocs', type: 'numingroup' },
  '671' : { name: 'LegAllocAccount', type: 'string' },
  '672' : { name: 'LegIndividualAllocID', type: 'string' },
  '673' : { name: 'LegAllocQty', type: 'qty' },
  '674' : { name: 'LegAllocAcctIDSource', type: 'string' },
  '675' : { name: 'LegSettlCurrency', type: 'currency' },
  '676' : { name: 'LegBenchmarkCurveCurrency', type: 'currency' },
  '677' : { name: 'LegBenchmarkCurveName', type: 'string' },
  '678' : { name: 'LegBenchmarkCurvePoint', type: 'string' },
  '679' : { name: 'LegBenchmarkPrice', type: 'price' },
  '680' : { name: 'LegBenchmarkPriceType', type: 'int' },
  '681' : { name: 'LegBidPx', type: 'price' },
  '682' : { name: 'LegIOIQty', type: 'string' },
  '683' : { name: 'NoLegStipulations', type: 'numingroup' },
  '684' : { name: 'LegOfferPx', type: 'price' },
  '686' : { name: 'LegPriceType', type: 'int' },
  '687' : { name: 'LegQty', type: 'qty' },
  '688' : { name: 'LegStipulationType', type: 'string' },
  '689' : { name: 'LegStipulationValue', type: 'string' },
  '690' : { name: 'LegSwapType', type: 'int',
            enums: {
              '1' : 'PAR_FOR_PAR',
              '2' : 'MODIFIED_DURATION',
              '4' : 'RISK',
              '5' : 'PROCEEDS'
            }
          },
  '691' : { name: 'Pool', type: 'string' },
  '692' : { name: 'QuotePriceType', type: 'int',
            enums: {
              '1' : 'PERCENT',
              '2' : 'PER_SHARE',
              '3' : 'FIXED_AMOUNT',
              '4' : 'DISCOUNT_PERCENTAGE_POINTS_BELOW_PAR',
              '5' : 'PREMIUM_PERCENTAGE_POINTS_OVER_PAR',
              '6' : 'BASIS_POINTS_RELATIVE_TO_BENCHMARK',
              '7' : 'TED_PRICE',
              '8' : 'TED_YIELD',
              '9' : 'YIELD_SPREAD',
              '10' : 'YIELD'
            }
          },
  '693' : { name: 'QuoteRespID', type: 'string' },
  '694' : { name: 'QuoteRespType', type: 'int',
            enums: {
              '1' : 'HIT_LIFT',
              '2' : 'COUNTER',
              '3' : 'EXPIRED',
              '4' : 'COVER',
              '5' : 'DONE_AWAY',
              '6' : 'PASS'
            }
          },
  '695' : { name: 'QuoteQualifier', type: 'char' },
  '696' : { name: 'YieldRedemptionDate', type: 'localmktdate' },
  '697' : { name: 'YieldRedemptionPrice', type: 'price' },
  '698' : { name: 'YieldRedemptionPriceType', type: 'int' },
  '699' : { name: 'BenchmarkSecurityID', type: 'string' },
  '700' : { name: 'ReversalIndicator', type: 'boolean' },
  '701' : { name: 'YieldCalcDate', type: 'localmktdate' },
  '702' : { name: 'NoPositions', type: 'numingroup' },
  '703' : { name: 'PosType', type: 'string',
            enums: {
              'TQ' : 'TRANSACTION_QUANTITY',
              'IAS' : 'INTRA_SPREAD_QTY',
              'IES' : 'INTER_SPREAD_QTY',
              'FIN' : 'END_OF_DAY_QTY',
              'SOD' : 'START_OF_DAY_QTY',
              'EX' : 'OPTION_EXERCISE_QTY',
              'AS' : 'OPTION_ASSIGNMENT',
              'TX' : 'TRANSACTION_FROM_EXERCISE',
              'TA' : 'TRANSACTION_FROM_ASSIGNMENT',
              'PIT' : 'PIT_TRADE_QTY',
              'TRF' : 'TRANSFER_TRADE_QTY',
              'ETR' : 'ELECTRONIC_TRADE_QTY',
              'ALC' : 'ALLOCATION_TRADE_QTY',
              'PA' : 'ADJUSTMENT_QTY',
              'ASF' : 'AS_OF_TRADE_QTY',
              'DLV' : 'DELIVERY_QTY',
              'TOT' : 'TOTAL_TRANSACTION_QTY',
              'XM' : 'CROSS_MARGIN_QTY',
              'SPL' : 'INTEGRAL_SPLIT'
            }
          },
  '704' : { name: 'LongQty', type: 'qty' },
  '705' : { name: 'ShortQty', type: 'qty' },
  '706' : { name: 'PosQtyStatus', type: 'int',
            enums: {
              '0' : 'SUBMITTED',
              '1' : 'ACCEPTED',
              '2' : 'REJECTED'
            }
          },
  '707' : { name: 'PosAmtType', type: 'string',
            enums: {
              'FMTM' : 'FINAL_MARK_TO_MARKET_AMOUNT',
              'IMTM' : 'INCREMENTAL_MARK_TO_MARKET_AMOUNT',
              'TVAR' : 'TRADE_VARIATION_AMOUNT',
              'SMTM' : 'START_OF_DAY_MARK_TO_MARKET_AMOUNT',
              'PREM' : 'PREMIUM_AMOUNT',
              'CRES' : 'CASH_RESIDUAL_AMOUNT',
              'CASH' : 'CASH_AMOUNT',
              'VADJ' : 'VALUE_ADJUSTED_AMOUNT'
            }
          },
  '708' : { name: 'PosAmt', type: 'amt' },
  '709' : { name: 'PosTransType', type: 'int',
            enums: {
              '1' : 'EXERCISE',
              '2' : 'DO_NOT_EXERCISE',
              '3' : 'POSITION_ADJUSTMENT',
              '4' : 'POSITION_CHANGE_SUBMISSION_MARGIN_DISPOSITION',
              '5' : 'PLEDGE'
            }
          },
  '710' : { name: 'PosReqID', type: 'string' },
  '711' : { name: 'NoUnderlyings', type: 'numingroup' },
  '712' : { name: 'PosMaintAction', type: 'int',
            enums: {
              '1' : 'NEW_USED_TO_INCREMENT_THE_OVERALL_TRANSACTION_QUANTITY',
              '2' : 'REPLACE_USED_TO_OVERRIDE_THE_OVERALL_TRANSACTION_QUANTITY_OR_SPECIFIC_ADD_MESSAGES_BASED_ON_THE_REFERENCE_ID',
              '3' : 'CANCEL_USED_TO_REMOVE_THE_OVERALL_TRANSACTION_OR_SPECIFIC_ADD_MESSAGES_BASED_ON_REFERENCE_ID'
            }
          },
  '713' : { name: 'OrigPosReqRefID', type: 'string' },
  '714' : { name: 'PosMaintRptRefID', type: 'string' },
  '715' : { name: 'ClearingBusinessDate', type: 'localmktdate' },
  '716' : { name: 'SettlSessID', type: 'string',
            enums: {
              'ITD' : 'INTRADAY',
              'RTH' : 'REGULAR_TRADING_HOURS',
              'ETH' : 'ELECTRONIC_TRADING_HOURS'
            }
          },
  '717' : { name: 'SettlSessSubID', type: 'string' },
  '718' : { name: 'AdjustmentType', type: 'int',
            enums: {
              '0' : 'PROCESS_REQUEST_AS_MARGIN_DISPOSITION',
              '1' : 'DELTA_PLUS',
              '2' : 'DELTA_MINUS',
              '3' : 'FINAL'
            }
          },
  '719' : { name: 'ContraryInstructionIndicator', type: 'boolean' },
  '720' : { name: 'PriorSpreadIndicator', type: 'boolean' },
  '721' : { name: 'PosMaintRptID', type: 'string' },
  '722' : { name: 'PosMaintStatus', type: 'int',
            enums: {
              '0' : 'ACCEPTED',
              '1' : 'ACCEPTED_WITH_WARNINGS',
              '2' : 'REJECTED',
              '3' : 'COMPLETED',
              '4' : 'COMPLETED_WITH_WARNINGS'
            }
          },
  '723' : { name: 'PosMaintResult', type: 'int',
            enums: {
              '0' : 'SUCCESSFUL_COMPLETION',
              '1' : 'REJECTED',
              '99' : 'OTHER'
            }
          },
  '724' : { name: 'PosReqType', type: 'int',
            enums: {
              '0' : 'POSITIONS',
              '1' : 'TRADES',
              '2' : 'EXERCISES',
              '3' : 'ASSIGNMENTS'
            }
          },
  '725' : { name: 'ResponseTransportType', type: 'int',
            enums: {
              '0' : 'INBAND_TRANSPORT_THE_REQUEST_WAS_SENT_OVER',
              '1' : 'OUT_OF_BAND_PRE_ARRANGED_OUT_OF_BAND_DELIVERY_MECHANISM'
            }
          },
  '726' : { name: 'ResponseDestination', type: 'string' },
  '727' : { name: 'TotalNumPosReports', type: 'int' },
  '728' : { name: 'PosReqResult', type: 'int',
            enums: {
              '0' : 'VALID_REQUEST',
              '1' : 'INVALID_OR_UNSUPPORTED_REQUEST',
              '2' : 'NO_POSITIONS_FOUND_THAT_MATCH_CRITERIA',
              '3' : 'NOT_AUTHORIZED_TO_REQUEST_POSITIONS',
              '4' : 'REQUEST_FOR_POSITION_NOT_SUPPORTED',
              '99' : 'OTHER'
            }
          },
  '729' : { name: 'PosReqStatus', type: 'int',
            enums: {
              '0' : 'COMPLETED',
              '1' : 'COMPLETED_WITH_WARNINGS',
              '2' : 'REJECTED'
            }
          },
  '730' : { name: 'SettlPrice', type: 'price' },
  '731' : { name: 'SettlPriceType', type: 'int',
            enums: {
              '1' : 'FINAL',
              '2' : 'THEORETICAL'
            }
          },
  '732' : { name: 'UnderlyingSettlPrice', type: 'price' },
  '733' : { name: 'UnderlyingSettlPriceType', type: 'int' },
  '734' : { name: 'PriorSettlPrice', type: 'price' },
  '735' : { name: 'NoQuoteQualifiers', type: 'numingroup' },
  '736' : { name: 'AllocSettlCurrency', type: 'currency' },
  '737' : { name: 'AllocSettlCurrAmt', type: 'amt' },
  '738' : { name: 'InterestAtMaturity', type: 'amt' },
  '739' : { name: 'LegDatedDate', type: 'localmktdate' },
  '740' : { name: 'LegPool', type: 'string' },
  '741' : { name: 'AllocInterestAtMaturity', type: 'amt' },
  '742' : { name: 'AllocAccruedInterestAmt', type: 'amt' },
  '743' : { name: 'DeliveryDate', type: 'localmktdate' },
  '744' : { name: 'AssignmentMethod', type: 'char',
            enums: {
              'R' : 'RANDOM',
              'P' : 'PRORATA'
            }
          },
  '745' : { name: 'AssignmentUnit', type: 'qty' },
  '746' : { name: 'OpenInterest', type: 'amt' },
  '747' : { name: 'ExerciseMethod', type: 'char',
            enums: {
              'A' : 'AUTOMATIC',
              'M' : 'MANUAL'
            }
          },
  '748' : { name: 'TotNumTradeReports', type: 'int' },
  '749' : { name: 'TradeRequestResult', type: 'int',
            enums: {
              '0' : 'SUCCESSFUL',
              '1' : 'INVALID_OR_UNKNOWN_INSTRUMENT',
              '2' : 'INVALID_TYPE_OF_TRADE_REQUESTED',
              '3' : 'INVALID_PARTIES',
              '4' : 'INVALID_TRANSPORT_TYPE_REQUESTED',
              '5' : 'INVALID_DESTINATION_REQUESTED',
              '8' : 'TRADEREQUESTTYPE_NOT_SUPPORTED',
              '9' : 'UNAUTHORIZED_FOR_TRADE_CAPTURE_REPORT_REQUEST',
              '99' : 'OTHER'
            }
          },
  '750' : { name: 'TradeRequestStatus', type: 'int',
            enums: {
              '0' : 'ACCEPTED',
              '1' : 'COMPLETED',
              '2' : 'REJECTED'
            }
          },
  '751' : { name: 'TradeReportRejectReason', type: 'int',
            enums: {
              '0' : 'SUCCESSFUL',
              '1' : 'INVALID_PARTY_INFORMATION',
              '2' : 'UNKNOWN_INSTRUMENT',
              '3' : 'UNAUTHORIZED_TO_REPORT_TRADES',
              '4' : 'INVALID_TRADE_TYPE',
              '99' : 'OTHER'
            }
          },
  '752' : { name: 'SideMultiLegReportingType', type: 'int',
            enums: {
              '1' : 'SINGLE_SECURITY',
              '2' : 'INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY',
              '3' : 'MULTI_LEG_SECURITY'
            }
          },
  '753' : { name: 'NoPosAmt', type: 'numingroup' },
  '754' : { name: 'AutoAcceptIndicator', type: 'boolean' },
  '755' : { name: 'AllocReportID', type: 'string' },
  '756' : { name: 'NoNested2PartyIDs', type: 'numingroup' },
  '757' : { name: 'Nested2PartyID', type: 'string' },
  '758' : { name: 'Nested2PartyIDSource', type: 'char' },
  '759' : { name: 'Nested2PartyRole', type: 'int' },
  '760' : { name: 'Nested2PartySubID', type: 'string' },
  '761' : { name: 'BenchmarkSecurityIDSource', type: 'string' },
  '762' : { name: 'SecuritySubType', type: 'string' },
  '763' : { name: 'UnderlyingSecuritySubType', type: 'string' },
  '764' : { name: 'LegSecuritySubType', type: 'string' },
  '765' : { name: 'AllowableOneSidednessPct', type: 'percentage' },
  '766' : { name: 'AllowableOneSidednessValue', type: 'amt' },
  '767' : { name: 'AllowableOneSidednessCurr', type: 'currency' },
  '768' : { name: 'NoTrdRegTimestamps', type: 'numingroup' },
  '769' : { name: 'TrdRegTimestamp', type: 'utctimestamp' },
  '770' : { name: 'TrdRegTimestampType', type: 'int',
            enums: {
              '1' : 'EXECUTION_TIME',
              '2' : 'TIME_IN',
              '3' : 'TIME_OUT',
              '4' : 'BROKER_RECEIPT',
              '5' : 'BROKER_EXECUTION'
            }
          },
  '771' : { name: 'TrdRegTimestampOrigin', type: 'string' },
  '772' : { name: 'ConfirmRefID', type: 'string' },
  '773' : { name: 'ConfirmType', type: 'int',
            enums: {
              '1' : 'STATUS',
              '2' : 'CONFIRMATION',
              '3' : 'CONFIRMATION_REQUEST_REJECTED'
            }
          },
  '774' : { name: 'ConfirmRejReason', type: 'int',
            enums: {
              '1' : 'MISMATCHED_ACCOUNT',
              '2' : 'MISSING_SETTLEMENT_INSTRUCTIONS',
              '99' : 'OTHER'
            }
          },
  '775' : { name: 'BookingType', type: 'int',
            enums: {
              '0' : 'REGULAR_BOOKING',
              '1' : 'CFD',
              '2' : 'TOTAL_RETURN_SWAP'
            }
          },
  '776' : { name: 'IndividualAllocRejCode', type: 'int' },
  '777' : { name: 'SettlInstMsgID', type: 'string' },
  '778' : { name: 'NoSettlInst', type: 'numingroup' },
  '779' : { name: 'LastUpdateTime', type: 'utctimestamp' },
  '780' : { name: 'AllocSettlInstType', type: 'int',
            enums: {
              '0' : 'USE_DEFAULT_INSTRUCTIONS',
              '1' : 'DERIVE_FROM_PARAMETERS_PROVIDED',
              '2' : 'FULL_DETAILS_PROVIDED',
              '3' : 'SSI_DB_IDS_PROVIDED',
              '4' : 'PHONE_FOR_INSTRUCTIONS'
            }
          },
  '781' : { name: 'NoSettlPartyIDs', type: 'numingroup' },
  '782' : { name: 'SettlPartyID', type: 'string' },
  '783' : { name: 'SettlPartyIDSource', type: 'char' },
  '784' : { name: 'SettlPartyRole', type: 'int' },
  '785' : { name: 'SettlPartySubID', type: 'string' },
  '786' : { name: 'SettlPartySubIDType', type: 'int' },
  '787' : { name: 'DlvyInstType', type: 'char',
            enums: {
              'S' : 'SECURITIES',
              'C' : 'CASH'
            }
          },
  '788' : { name: 'TerminationType', type: 'int',
            enums: {
              '1' : 'OVERNIGHT',
              '2' : 'TERM',
              '3' : 'FLEXIBLE',
              '4' : 'OPEN'
            }
          },
  '789' : { name: 'NextExpectedMsgSeqNum', type: 'seqnum' },
  '790' : { name: 'OrdStatusReqID', type: 'string' },
  '791' : { name: 'SettlInstReqID', type: 'string' },
  '792' : { name: 'SettlInstReqRejCode', type: 'int',
            enums: {
              '0' : 'UNABLE_TO_PROCESS_REQUEST',
              '1' : 'UNKNOWN_ACCOUNT',
              '2' : 'NO_MATCHING_SETTLEMENT_INSTRUCTIONS_FOUND',
              '99' : 'OTHER'
            }
          },
  '793' : { name: 'SecondaryAllocID', type: 'string' },
  '794' : { name: 'AllocReportType', type: 'int',
            enums: {
              '3' : 'SELLSIDE_CALCULATED_USING_PRELIMINARY',
              '4' : 'SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY',
              '5' : 'WAREHOUSE_RECAP',
              '8' : 'REQUEST_TO_INTERMEDIARY'
            }
          },
  '795' : { name: 'AllocReportRefID', type: 'string' },
  '796' : { name: 'AllocCancReplaceReason', type: 'int',
            enums: {
              '1' : 'ORIGINAL_DETAILS_INCOMPLETE_INCORRECT',
              '2' : 'CHANGE_IN_UNDERLYING_ORDER_DETAILS',
              '99' : 'OTHER'
            }
          },
  '797' : { name: 'CopyMsgIndicator', type: 'boolean' },
  '798' : { name: 'AllocAccountType', type: 'int',
            enums: {
              '1' : 'ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS',
              '2' : 'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS',
              '3' : 'HOUSE_TRADER',
              '4' : 'FLOOR_TRADER',
              '6' : 'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED',
              '7' : 'ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED',
              '8' : 'JOINT_BACKOFFICE_ACCOUNT'
            }
          },
  '799' : { name: 'OrderAvgPx', type: 'price' },
  '800' : { name: 'OrderBookingQty', type: 'qty' },
  '801' : { name: 'NoSettlPartySubIDs', type: 'numingroup' },
  '802' : { name: 'NoPartySubIDs', type: 'numingroup' },
  '803' : { name: 'PartySubIDType', type: 'int',
            enums: {
              '1' : 'FIRM',
              '2' : 'PERSON',
              '3' : 'SYSTEM',
              '4' : 'APPLICATION',
              '5' : 'FULL_LEGAL_NAME_OF_FIRM',
              '6' : 'POSTAL_ADDRESS',
              '7' : 'PHONE_NUMBER',
              '8' : 'EMAIL_ADDRESS',
              '9' : 'CONTACT_NAME',
              '10' : 'SECURITIES_ACCOUNT_NUMBER',
              '11' : 'REGISTRATION_NUMBER',
              '12' : 'REGISTERED_ADDRESS_12',
              '13' : 'REGULATORY_STATUS',
              '14' : 'REGISTRATION_NAME',
              '15' : 'CASH_ACCOUNT_NUMBER',
              '16' : 'BIC',
              '17' : 'CSD_PARTICIPANT_MEMBER_CODE',
              '18' : 'REGISTERED_ADDRESS_18',
              '19' : 'FUND_ACCOUNT_NAME',
              '20' : 'TELEX_NUMBER',
              '21' : 'FAX_NUMBER',
              '22' : 'SECURITIES_ACCOUNT_NAME',
              '23' : 'CASH_ACCOUNT_NAME',
              '24' : 'DEPARTMENT',
              '25' : 'LOCATION',
              '26' : 'POSITION_ACCOUNT_TYPE'
            }
          },
  '804' : { name: 'NoNestedPartySubIDs', type: 'numingroup' },
  '805' : { name: 'NestedPartySubIDType', type: 'int' },
  '806' : { name: 'NoNested2PartySubIDs', type: 'numingroup' },
  '807' : { name: 'Nested2PartySubIDType', type: 'int' },
  '808' : { name: 'AllocIntermedReqType', type: 'int',
            enums: {
              '1' : 'PENDING_ACCEPT',
              '2' : 'PENDING_RELEASE',
              '3' : 'PENDING_REVERSAL',
              '4' : 'ACCEPT',
              '5' : 'BLOCK_LEVEL_REJECT',
              '6' : 'ACCOUNT_LEVEL_REJECT'
            }
          },
  '810' : { name: 'UnderlyingPx', type: 'price' },
  '811' : { name: 'PriceDelta', type: 'float' },
  '812' : { name: 'ApplQueueMax', type: 'int' },
  '813' : { name: 'ApplQueueDepth', type: 'int' },
  '814' : { name: 'ApplQueueResolution', type: 'int',
            enums: {
              '0' : 'NO_ACTION_TAKEN',
              '1' : 'QUEUE_FLUSHED',
              '2' : 'OVERLAY_LAST',
              '3' : 'END_SESSION'
            }
          },
  '815' : { name: 'ApplQueueAction', type: 'int',
            enums: {
              '0' : 'NO_ACTION_TAKEN',
              '1' : 'QUEUE_FLUSHED',
              '2' : 'OVERLAY_LAST',
              '3' : 'END_SESSION'
            }
          },
  '816' : { name: 'NoAltMDSource', type: 'numingroup' },
  '817' : { name: 'AltMDSourceID', type: 'string' },
  '818' : { name: 'SecondaryTradeReportID', type: 'string' },
  '819' : { name: 'AvgPxIndicator', type: 'int',
            enums: {
              '0' : 'NO_AVERAGE_PRICING',
              '1' : 'TRADE_IS_PART_OF_AN_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID',
              '2' : 'LAST_TRADE_IN_THE_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID'
            }
          },
  '820' : { name: 'TradeLinkID', type: 'string' },
  '821' : { name: 'OrderInputDevice', type: 'string' },
  '822' : { name: 'UnderlyingTradingSessionID', type: 'string' },
  '823' : { name: 'UnderlyingTradingSessionSubID', type: 'string' },
  '824' : { name: 'TradeLegRefID', type: 'string' },
  '825' : { name: 'ExchangeRule', type: 'string' },
  '826' : { name: 'TradeAllocIndicator', type: 'int',
            enums: {
              '0' : 'ALLOCATION_NOT_REQUIRED',
              '1' : 'ALLOCATION_REQUIRED',
              '2' : 'USE_ALLOCATION_PROVIDED_WITH_THE_TRADE'
            }
          },
  '827' : { name: 'ExpirationCycle', type: 'int',
            enums: {
              '0' : 'EXPIRE_ON_TRADING_SESSION_CLOSE',
              '1' : 'EXPIRE_ON_TRADING_SESSION_OPEN'
            }
          },
  '828' : { name: 'TrdType', type: 'int',
            enums: {
              '0' : 'REGULAR_TRADE',
              '1' : 'BLOCK_TRADE',
              '2' : 'EFP',
              '3' : 'TRANSFER',
              '4' : 'LATE_TRADE',
              '5' : 'T_TRADE',
              '6' : 'WEIGHTED_AVERAGE_PRICE_TRADE',
              '7' : 'BUNCHED_TRADE',
              '8' : 'LATE_BUNCHED_TRADE',
              '9' : 'PRIOR_REFERENCE_PRICE_TRADE',
              '10' : 'AFTER_HOURS_TRADE'
            }
          },
  '829' : { name: 'TrdSubType', type: 'int' },
  '830' : { name: 'TransferReason', type: 'string' },
  '832' : { name: 'TotNumAssignmentReports', type: 'int' },
  '833' : { name: 'AsgnRptID', type: 'string' },
  '834' : { name: 'ThresholdAmount', type: 'priceoffset' },
  '835' : { name: 'PegMoveType', type: 'int',
            enums: {
              '0' : 'FLOATING',
              '1' : 'FIXED'
            }
          },
  '836' : { name: 'PegOffsetType', type: 'int',
            enums: {
              '0' : 'PRICE',
              '1' : 'BASIS_POINTS',
              '2' : 'TICKS',
              '3' : 'PRICE_TIER'
            }
          },
  '837' : { name: 'PegLimitType', type: 'int',
            enums: {
              '0' : 'OR_BETTER',
              '1' : 'STRICT_LIMIT_IS_A_STRICT_LIMIT',
              '2' : 'OR_WORSE_FOR_A_BUY_THE_PEG_LIMIT_IS_A_MINIMUM_AND_FOR_A_SELL_THE_PEG_LIMIT_IS_A_MAXIMUM'
            }
          },
  '838' : { name: 'PegRoundDirection', type: 'int',
            enums: {
              '1' : 'MORE_AGGRESSIVE_ON_A_BUY_ORDER_ROUND_THE_PRICE_UP_ROUND_UP_TO_THE_NEAREST_TICK_ON_A_SELL_ROUND_DOWN_TO_THE_NEAREST_TICK',
              '2' : 'MORE_PASSIVE_ON_A_BUY_ORDER_ROUND_DOWN_TO_NEAREST_TICK_ON_A_SELL_ORDER_ROUND_UP_TO_NEAREST_TICK'
            }
          },
  '839' : { name: 'PeggedPrice', type: 'price' },
  '840' : { name: 'PegScope', type: 'int',
            enums: {
              '1' : 'LOCAL',
              '2' : 'NATIONAL',
              '3' : 'GLOBAL',
              '4' : 'NATIONAL_EXCLUDING_LOCAL'
            }
          },
  '841' : { name: 'DiscretionMoveType', type: 'int',
            enums: {
              '0' : 'FLOATING',
              '1' : 'FIXED'
            }
          },
  '842' : { name: 'DiscretionOffsetType', type: 'int',
            enums: {
              '0' : 'PRICE',
              '1' : 'BASIS_POINTS',
              '2' : 'TICKS',
              '3' : 'PRICE_TIER'
            }
          },
  '843' : { name: 'DiscretionLimitType', type: 'int',
            enums: {
              '0' : 'OR_BETTER',
              '1' : 'STRICT_LIMIT_IS_A_STRICT_LIMIT',
              '2' : 'OR_WORSE_FOR_A_BUY_THE_DISCRETION_PRICE_IS_A_MINIMUM_AND_FOR_A_SELL_THE_DISCRETION_PRICE_IS_A_MAXIMUM'
            }
          },
  '844' : { name: 'DiscretionRoundDirection', type: 'int',
            enums: {
              '1' : 'MORE_AGGRESSIVE_ON_A_BUY_ORDER_ROUND_THE_PRICE_UP_ROUND_UP_TO_THE_NEAREST_TICK_ON_A_SELL_ROUND_DOWN_TO_THE_NEAREST_TICK',
              '2' : 'MORE_PASSIVE_ON_A_BUY_ORDER_ROUND_DOWN_TO_NEAREST_TICK_ON_A_SELL_ORDER_ROUND_UP_TO_NEAREST_TICK'
            }
          },
  '845' : { name: 'DiscretionPrice', type: 'price' },
  '846' : { name: 'DiscretionScope', type: 'int',
            enums: {
              '1' : 'LOCAL',
              '2' : 'NATIONAL',
              '3' : 'GLOBAL',
              '4' : 'NATIONAL_EXCLUDING_LOCAL'
            }
          },
  '847' : { name: 'TargetStrategy', type: 'int',
            enums: {
              '1' : 'VWAP',
              '2' : 'PARTICIPATE',
              '3' : 'MININIZE_MARKET_IMPACT'
            }
          },
  '848' : { name: 'TargetStrategyParameters', type: 'string' },
  '849' : { name: 'ParticipationRate', type: 'percentage' },
  '850' : { name: 'TargetStrategyPerformance', type: 'float' },
  '851' : { name: 'LastLiquidityInd', type: 'int',
            enums: {
              '1' : 'ADDED_LIQUIDITY',
              '2' : 'REMOVED_LIQUIDITY',
              '3' : 'LIQUIDITY_ROUTED_OUT'
            }
          },
  '852' : { name: 'PublishTrdIndicator', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '853' : { name: 'ShortSaleReason', type: 'int',
            enums: {
              '0' : 'DEALER_SOLD_SHORT',
              '1' : 'DEALER_SOLD_SHORT_EXEMPT',
              '2' : 'SELLING_CUSTOMER_SOLD_SHORT',
              '3' : 'SELLING_CUSTOMER_SOLD_SHORT_EXEMPT',
              '4' : 'QUALIFED_SERVICE_REPRESENTATIVE',
              '5' : 'QSR_OR_AGU_CONTRA_SIDE_SOLD_SHORT_EXEMPT'
            }
          },
  '854' : { name: 'QtyType', type: 'int',
            enums: {
              '0' : 'UNITS',
              '1' : 'CONTRACTS'
            }
          },
  '855' : { name: 'SecondaryTrdType', type: 'int' },
  '856' : { name: 'TradeReportType', type: 'int',
            enums: {
              '0' : 'SUBMIT',
              '1' : 'ALLEGED',
              '2' : 'ACCEPT',
              '3' : 'DECLINE',
              '4' : 'ADDENDUM',
              '5' : 'NO_WAS',
              '6' : 'TRADE_REPORT_CANCEL',
              '7' : 'LOCKED_IN_TRADE_BREAK'
            }
          },
  '857' : { name: 'AllocNoOrdersType', type: 'int',
            enums: {
              '0' : 'NOT_SPECIFIED',
              '1' : 'EXPLICIT_LIST_PROVIDED'
            }
          },
  '858' : { name: 'SharedCommission', type: 'amt' },
  '859' : { name: 'ConfirmReqID', type: 'string' },
  '860' : { name: 'AvgParPx', type: 'price' },
  '861' : { name: 'ReportedPx', type: 'price' },
  '862' : { name: 'NoCapacities', type: 'numingroup' },
  '863' : { name: 'OrderCapacityQty', type: 'qty' },
  '864' : { name: 'NoEvents', type: 'numingroup' },
  '865' : { name: 'EventType', type: 'int',
            enums: {
              '1' : 'PUT',
              '2' : 'CALL',
              '3' : 'TENDER',
              '4' : 'SINKING_FUND_CALL',
              '99' : 'OTHER'
            }
          },
  '866' : { name: 'EventDate', type: 'localmktdate' },
  '867' : { name: 'EventPx', type: 'price' },
  '868' : { name: 'EventText', type: 'string' },
  '869' : { name: 'PctAtRisk', type: 'percentage' },
  '870' : { name: 'NoInstrAttrib', type: 'numingroup' },
  '871' : { name: 'InstrAttribType', type: 'int',
            enums: {
              '1' : 'FLAT',
              '2' : 'ZERO_COUPON',
              '3' : 'INTEREST_BEARING',
              '4' : 'NO_PERIODIC_PAYMENTS',
              '5' : 'VARIABLE_RATE',
              '6' : 'LESS_FEE_FOR_PUT',
              '7' : 'STEPPED_COUPON',
              '8' : 'COUPON_PERIOD',
              '9' : 'WHEN_AND_IF_ISSUED',
              '10' : 'ORIGINAL_ISSUE_DISCOUNT',
              '11' : 'CALLABLE_PUTTABLE',
              '12' : 'ESCROWED_TO_MATURITY',
              '13' : 'ESCROWED_TO_REDEMPTION_DATE_CALLABLE_SUPPLY_REDEMPTION_DATE_IN_THE_INSTRATTRIBVALUE',
              '14' : 'PREREFUNDED',
              '15' : 'IN_DEFAULT',
              '16' : 'UNRATED',
              '17' : 'TAXABLE',
              '18' : 'INDEXED',
              '19' : 'SUBJECT_TO_ALTERNATIVE_MINIMUM_TAX',
              '20' : 'ORIGINAL_ISSUE_DISCOUNT_PRICE_SUPPLY_PRICE_IN_THE_INSTRATTRIBVALUE',
              '21' : 'CALLABLE_BELOW_MATURITY_VALUE',
              '22' : 'CALLABLE_WITHOUT_NOTICE_BY_MAIL_TO_HOLDER_UNLESS_REGISTERED',
              '99' : 'TEXT_SUPPLY_THE_TEXT_OF_THE_ATTRIBUTE_OR_DISCLAIMER_IN_THE_INSTRATTRIBVALUE'
            }
          },
  '872' : { name: 'InstrAttribValue', type: 'string' },
  '873' : { name: 'DatedDate', type: 'localmktdate' },
  '874' : { name: 'InterestAccrualDate', type: 'localmktdate' },
  '875' : { name: 'CPProgram', type: 'int',
            enums: {
              '1' : '3',
              '2' : '4',
              '99' : 'OTHER'
            }
          },
  '876' : { name: 'CPRegType', type: 'string' },
  '877' : { name: 'UnderlyingCPProgram', type: 'string' },
  '878' : { name: 'UnderlyingCPRegType', type: 'string' },
  '879' : { name: 'UnderlyingQty', type: 'qty' },
  '880' : { name: 'TrdMatchID', type: 'string' },
  '881' : { name: 'SecondaryTradeReportRefID', type: 'string' },
  '882' : { name: 'UnderlyingDirtyPrice', type: 'price' },
  '883' : { name: 'UnderlyingEndPrice', type: 'price' },
  '884' : { name: 'UnderlyingStartValue', type: 'amt' },
  '885' : { name: 'UnderlyingCurrentValue', type: 'amt' },
  '886' : { name: 'UnderlyingEndValue', type: 'amt' },
  '887' : { name: 'NoUnderlyingStips', type: 'numingroup' },
  '888' : { name: 'UnderlyingStipType', type: 'string' },
  '889' : { name: 'UnderlyingStipValue', type: 'string' },
  '890' : { name: 'MaturityNetMoney', type: 'amt' },
  '891' : { name: 'MiscFeeBasis', type: 'int',
            enums: {
              '0' : 'ABSOLUTE',
              '1' : 'PER_UNIT',
              '2' : 'PERCENTAGE'
            }
          },
  '892' : { name: 'TotNoAllocs', type: 'int' },
  '893' : { name: 'LastFragment', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
  '894' : { name: 'CollReqID', type: 'string' },
  '895' : { name: 'CollAsgnReason', type: 'int',
            enums: {
              '0' : 'INITIAL',
              '1' : 'SCHEDULED',
              '2' : 'TIME_WARNING',
              '3' : 'MARGIN_DEFICIENCY',
              '4' : 'MARGIN_EXCESS',
              '5' : 'FORWARD_COLLATERAL_DEMAND',
              '6' : 'EVENT_OF_DEFAULT',
              '7' : 'ADVERSE_TAX_EVENT'
            }
          },
  '896' : { name: 'CollInquiryQualifier', type: 'int',
            enums: {
              '0' : 'TRADEDATE',
              '1' : 'GC_INSTRUMENT',
              '2' : 'COLLATERALINSTRUMENT',
              '3' : 'SUBSTITUTION_ELIGIBLE',
              '4' : 'NOT_ASSIGNED',
              '5' : 'PARTIALLY_ASSIGNED',
              '6' : 'FULLY_ASSIGNED',
              '7' : 'OUTSTANDING_TRADES'
            }
          },
  '897' : { name: 'NoTrades', type: 'numingroup' },
  '898' : { name: 'MarginRatio', type: 'percentage' },
  '899' : { name: 'MarginExcess', type: 'amt' },
  '900' : { name: 'TotalNetValue', type: 'amt' },
  '901' : { name: 'CashOutstanding', type: 'amt' },
  '902' : { name: 'CollAsgnID', type: 'string' },
  '903' : { name: 'CollAsgnTransType', type: 'int',
            enums: {
              '0' : 'NEW',
              '1' : 'REPLACE',
              '2' : 'CANCEL',
              '3' : 'RELEASE',
              '4' : 'REVERSE'
            }
          },
  '904' : { name: 'CollRespID', type: 'string' },
  '905' : { name: 'CollAsgnRespType', type: 'int',
            enums: {
              '0' : 'RECEIVED',
              '1' : 'ACCEPTED',
              '2' : 'DECLINED',
              '3' : 'REJECTED'
            }
          },
  '906' : { name: 'CollAsgnRejectReason', type: 'int',
            enums: {
              '0' : 'UNKNOWN_DEAL',
              '1' : 'UNKNOWN_OR_INVALID_INSTRUMENT',
              '2' : 'UNAUTHORIZED_TRANSACTION',
              '3' : 'INSUFFICIENT_COLLATERAL',
              '4' : 'INVALID_TYPE_OF_COLLATERAL',
              '5' : 'EXCESSIVE_SUBSTITUTION',
              '99' : 'OTHER'
            }
          },
  '907' : { name: 'CollAsgnRefID', type: 'string' },
  '908' : { name: 'CollRptID', type: 'string' },
  '909' : { name: 'CollInquiryID', type: 'string' },
  '910' : { name: 'CollStatus', type: 'int',
            enums: {
              '0' : 'UNASSIGNED',
              '1' : 'PARTIALLY_ASSIGNED',
              '2' : 'ASSIGNMENT_PROPOSED',
              '3' : 'ASSIGNED',
              '4' : 'CHALLENGED'
            }
          },
  '911' : { name: 'TotNumReports', type: 'int' },
  '912' : { name: 'LastRptRequested', type: 'boolean' },
  '913' : { name: 'AgreementDesc', type: 'string' },
  '914' : { name: 'AgreementID', type: 'string' },
  '915' : { name: 'AgreementDate', type: 'localmktdate' },
  '916' : { name: 'StartDate', type: 'localmktdate' },
  '917' : { name: 'EndDate', type: 'localmktdate' },
  '918' : { name: 'AgreementCurrency', type: 'currency' },
  '919' : { name: 'DeliveryType', type: 'int',
            enums: {
              '0' : 'VERSUS_PAYMENT_DELIVER',
              '1' : 'FREE_DELIVER',
              '2' : 'TRI_PARTY',
              '3' : 'HOLD_IN_CUSTODY'
            }
          },
  '920' : { name: 'EndAccruedInterestAmt', type: 'amt' },
  '921' : { name: 'StartCash', type: 'amt' },
  '922' : { name: 'EndCash', type: 'amt' },
  '923' : { name: 'UserRequestID', type: 'string' },
  '924' : { name: 'UserRequestType', type: 'int',
            enums: {
              '1' : 'LOGONUSER',
              '2' : 'LOGOFFUSER',
              '3' : 'CHANGEPASSWORDFORUSER',
              '4' : 'REQUEST_INDIVIDUAL_USER_STATUS'
            }
          },
  '925' : { name: 'NewPassword', type: 'string' },
  '926' : { name: 'UserStatus', type: 'int',
            enums: {
              '1' : 'LOGGED_IN',
              '2' : 'NOT_LOGGED_IN',
              '3' : 'USER_NOT_RECOGNISED',
              '4' : 'PASSWORD_INCORRECT',
              '5' : 'PASSWORD_CHANGED',
              '6' : 'OTHER'
            }
          },
  '927' : { name: 'UserStatusText', type: 'string' },
  '928' : { name: 'StatusValue', type: 'int',
            enums: {
              '1' : 'CONNECTED',
              '2' : 'NOT_CONNECTED_DOWN_EXPECTED_UP',
              '3' : 'NOT_CONNECTED_DOWN_EXPECTED_DOWN',
              '4' : 'IN_PROCESS'
            }
          },
  '929' : { name: 'StatusText', type: 'string' },
  '930' : { name: 'RefCompID', type: 'string' },
  '931' : { name: 'RefSubID', type: 'string' },
  '932' : { name: 'NetworkResponseID', type: 'string' },
  '933' : { name: 'NetworkRequestID', type: 'string' },
  '934' : { name: 'LastNetworkResponseID', type: 'string' },
  '935' : { name: 'NetworkRequestType', type: 'int',
            enums: {
              '1' : 'SNAPSHOT',
              '2' : 'SUBSCRIBE',
              '4' : 'STOP_SUBSCRIBING',
              '8' : 'LEVEL_OF_DETAIL_THEN_NOCOMPIDS_BECOMES_REQUIRED'
            }
          },
  '936' : { name: 'NoCompIDs', type: 'numingroup' },
  '937' : { name: 'NetworkStatusResponseType', type: 'int',
            enums: {
              '1' : 'FULL',
              '2' : 'INCREMENTAL_UPDATE'
            }
          },
  '938' : { name: 'NoCollInquiryQualifier', type: 'numingroup' },
  '939' : { name: 'TrdRptStatus', type: 'int',
            enums: {
              '0' : 'ACCEPTED',
              '1' : 'REJECTED'
            }
          },
  '940' : { name: 'AffirmStatus', type: 'int',
            enums: {
              '1' : 'RECEIVED',
              '2' : 'CONFIRM_REJECTED_IE_NOT_AFFIRMED',
              '3' : 'AFFIRMED'
            }
          },
  '941' : { name: 'UnderlyingStrikeCurrency', type: 'currency' },
  '942' : { name: 'LegStrikeCurrency', type: 'currency' },
  '943' : { name: 'TimeBracket', type: 'string' },
  '944' : { name: 'CollAction', type: 'int',
            enums: {
              '0' : 'RETAIN',
              '1' : 'ADD',
              '2' : 'REMOVE'
            }
          },
  '945' : { name: 'CollInquiryStatus', type: 'int',
            enums: {
              '0' : 'ACCEPTED',
              '1' : 'ACCEPTED_WITH_WARNINGS',
              '2' : 'COMPLETED',
              '3' : 'COMPLETED_WITH_WARNINGS',
              '4' : 'REJECTED'
            }
          },
  '946' : { name: 'CollInquiryResult', type: 'int',
            enums: {
              '0' : 'SUCCESSFUL',
              '1' : 'INVALID_OR_UNKNOWN_INSTRUMENT',
              '2' : 'INVALID_OR_UNKNOWN_COLLATERAL_TYPE',
              '3' : 'INVALID_PARTIES',
              '4' : 'INVALID_TRANSPORT_TYPE_REQUESTED',
              '5' : 'INVALID_DESTINATION_REQUESTED',
              '6' : 'NO_COLLATERAL_FOUND_FOR_THE_TRADE_SPECIFIED',
              '7' : 'NO_COLLATERAL_FOUND_FOR_THE_ORDER_SPECIFIED',
              '8' : 'COLLATERAL_INQUIRY_TYPE_NOT_SUPPORTED',
              '9' : 'UNAUTHORIZED_FOR_COLLATERAL_INQUIRY',
              '99' : 'OTHER'
            }
          },
  '947' : { name: 'StrikeCurrency', type: 'currency' },
  '948' : { name: 'NoNested3PartyIDs', type: 'numingroup' },
  '949' : { name: 'Nested3PartyID', type: 'string' },
  '950' : { name: 'Nested3PartyIDSource', type: 'char' },
  '951' : { name: 'Nested3PartyRole', type: 'int' },
  '952' : { name: 'NoNested3PartySubIDs', type: 'numingroup' },
  '953' : { name: 'Nested3PartySubID', type: 'string' },
  '954' : { name: 'Nested3PartySubIDType', type: 'int' },
  '955' : { name: 'LegContractSettlMonth', type: 'monthyear' },
  '956' : { name: 'LegInterestAccrualDate', type: 'localmktdate' },
}
  };
