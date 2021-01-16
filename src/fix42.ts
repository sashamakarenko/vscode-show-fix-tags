export const FIX42_FIELDS = {
  version : '4.2',
  fields : {
    '1' : { name: 'Account', type: 'string' },
    '2' : { name: 'AdvId', type: 'string' },
    '3' : { name: 'AdvRefID', type: 'string' },
    '4' : { name: 'AdvSide', type: 'char',
            enums: {
              'B' : 'BUY',
              'S' : 'SELL',
              'T' : 'TRADE',
              'X' : 'CROSS'
            }
          },
    '5' : { name: 'AdvTransType', type: 'string',
            enums: {
              'C' : 'CANCEL',
              'N' : 'NEW',
              'R' : 'REPLACE'
            }
          },
    '6' : { name: 'AvgPx', type: 'price' },
    '7' : { name: 'BeginSeqNo', type: 'int' },
    '8' : { name: 'BeginString', type: 'string' },
    '9' : { name: 'BodyLength', type: 'int' },
   '10' : { name: 'CheckSum', type: 'string' },
   '11' : { name: 'ClOrdID', type: 'string' },
   '12' : { name: 'Commission', type: 'amt' },
   '13' : { name: 'CommType', type: 'char',
            enums: {
              '1' : 'PER_SHARE',
              '2' : 'PERCENTAGE',
              '3' : 'ABSOLUTE'
            }
          },
   '14' : { name: 'CumQty', type: 'qty' },
   '15' : { name: 'Currency', type: 'currency' },
   '16' : { name: 'EndSeqNo', type: 'int' },
   '17' : { name: 'ExecID', type: 'string' },
   '18' : { name: 'ExecInst', type: 'multiplevaluestring',
            enums: {
              '0' : 'STAY_ON_OFFERSIDE',
              '1' : 'NOT_HELD',
              '2' : 'WORK',
              '3' : 'GO_ALONG',
              '4' : 'OVER_THE_DAY',
              '5' : 'HELD',
              '6' : 'PARTICIPATE_DONT_INITIATE',
              '7' : 'STRICT_SCALE',
              '8' : 'TRY_TO_SCALE',
              '9' : 'STAY_ON_BIDSIDE',
              'A' : 'NO_CROSS',
              'B' : 'OK_TO_CROSS',
              'C' : 'CALL_FIRST',
              'D' : 'PERCENT_OF_VOLUME',
              'E' : 'DO_NOT_INCREASE',
              'F' : 'DO_NOT_REDUCE',
              'G' : 'ALL_OR_NONE',
              'I' : 'INSTITUTIONS_ONLY',
              'L' : 'LAST_PEG',
              'M' : 'MID_PRICE_PEG',
              'N' : 'NON_NEGOTIABLE',
              'O' : 'OPENING_PEG',
              'P' : 'MARKET_PEG',
              'R' : 'PRIMARY_PEG',
              'S' : 'SUSPEND',
              'T' : 'FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER',
              'U' : 'CUSTOMER_DISPLAY_INSTRUCTION',
              'V' : 'NETTING',
              'W' : 'PEG_TO_VWAP'
            }
          },
   '19' : { name: 'ExecRefID', type: 'string' },
   '20' : { name: 'ExecTransType', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'CANCEL',
              '2' : 'CORRECT',
              '3' : 'STATUS'
            }
          },
   '21' : { name: 'HandlInst', type: 'char',
            enums: {
              '1' : 'AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION',
              '2' : 'AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK',
              '3' : 'MANUAL_ORDER_BEST_EXECUTION'
            }
          },
   '22' : { name: 'IDSource', type: 'string',
            enums: {
              '1' : 'CUSIP',
              '2' : 'SEDOL',
              '3' : 'QUIK',
              '4' : 'ISIN_NUMBER',
              '5' : 'RIC_CODE',
              '6' : 'ISO_CURRENCY_CODE',
              '7' : 'ISO_COUNTRY_CODE',
              '8' : 'EXCHANGE_SYMBOL',
              '9' : 'CONSOLIDATED_TAPE_ASSOCIATION'
            }
          },
   '23' : { name: 'IOIid', type: 'string' },
   '24' : { name: 'IOIOthSvc', type: 'char' },
   '25' : { name: 'IOIQltyInd', type: 'char',
            enums: {
              'H' : 'HIGH',
              'L' : 'LOW',
              'M' : 'MEDIUM'
            }
          },
   '26' : { name: 'IOIRefID', type: 'string' },
   '27' : { name: 'IOIShares', type: 'string',
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
              '1' : 'AGENT',
              '2' : 'CROSS_AS_AGENT',
              '3' : 'CROSS_AS_PRINCIPAL',
              '4' : 'PRINCIPAL'
            }
          },
   '30' : { name: 'LastMkt', type: 'exchange' },
   '31' : { name: 'LastPx', type: 'price' },
   '32' : { name: 'LastShares', type: 'qty' },
   '33' : { name: 'LinesOfText', type: 'int' },
   '34' : { name: 'MsgSeqNum', type: 'int' },
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
              'B' : 'NEWS',
              'b' : 'QUOTE_ACKNOWLEDGEMENT',
              'C' : 'EMAIL',
              'c' : 'SECURITY_DEFINITION_REQUEST',
              'D' : 'ORDER_SINGLE',
              'd' : 'SECURITY_DEFINITION',
              'E' : 'ORDER_LIST',
              'e' : 'SECURITY_STATUS_REQUEST',
              'f' : 'SECURITY_STATUS',
              'F' : 'ORDER_CANCEL_REQUEST',
              'G' : 'ORDER_CANCEL_REPLACE_REQUEST',
              'g' : 'TRADING_SESSION_STATUS_REQUEST',
              'H' : 'ORDER_STATUS_REQUEST',
              'h' : 'TRADING_SESSION_STATUS',
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
              'P' : 'ALLOCATION_ACK',
              'Q' : 'DONT_KNOW_TRADE',
              'R' : 'QUOTE_REQUEST',
              'S' : 'QUOTE',
              'T' : 'SETTLEMENT_INSTRUCTIONS',
              'V' : 'MARKET_DATA_REQUEST',
              'W' : 'MARKET_DATA_SNAPSHOT_FULL_REFRESH',
              'X' : 'MARKET_DATA_INCREMENTAL_REFRESH',
              'Y' : 'MARKET_DATA_REQUEST_REJECT',
              'Z' : 'QUOTE_CANCEL'
            }
          },
   '36' : { name: 'NewSeqNo', type: 'int' },
   '37' : { name: 'OrderID', type: 'string' },
   '38' : { name: 'OrderQty', type: 'qty' },
   '39' : { name: 'OrdStatus', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'PARTIALLY_FILLED',
              '2' : 'FILLED',
              '3' : 'DONE_FOR_DAY',
              '4' : 'CANCELED',
              '5' : 'REPLACED',
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
              '5' : 'MARKET_ON_CLOSE',
              '6' : 'WITH_OR_WITHOUT',
              '7' : 'LIMIT_OR_BETTER',
              '8' : 'LIMIT_WITH_OR_WITHOUT',
              '9' : 'ON_BASIS',
              'A' : 'ON_CLOSE',
              'B' : 'LIMIT_ON_CLOSE',
              'C' : 'FOREX_C',
              'D' : 'PREVIOUSLY_QUOTED',
              'E' : 'PREVIOUSLY_INDICATED',
              'F' : 'FOREX_F',
              'G' : 'FOREX_G',
              'H' : 'FOREX_H',
              'I' : 'FUNARI',
              'P' : 'PEGGED'
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
   '45' : { name: 'RefSeqNum', type: 'int' },
   '46' : { name: 'RelatdSym', type: 'string' },
   '47' : { name: 'Rule80A', type: 'char',
            enums: {
              'A' : 'AGENCY_SINGLE_ORDER',
              'B' : 'SHORT_EXEMPT_TRANSACTION_B',
              'C' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_MEMBER_FIRM_ORG',
              'D' : 'PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRM_ORG',
              'E' : 'REGISTERED_EQUITY_MARKET_MAKER_TRADES',
              'F' : 'SHORT_EXEMPT_TRANSACTION_F',
              'H' : 'SHORT_EXEMPT_TRANSACTION_H',
              'I' : 'INDIVIDUAL_INVESTOR_SINGLE_ORDER',
              'J' : 'PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER',
              'K' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER',
              'L' : 'SHORT_EXEMPT_TRANSACTION_FOR_MEMBER_COMPETING_MARKET_MAKER_AFFILIATED_WITH_THE_FIRM_CLEARING_THE_TRADE',
              'M' : 'PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER',
              'N' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_MEMBER',
              'O' : 'COMPETING_DEALER_TRADES_O',
              'P' : 'PRINCIPAL',
              'R' : 'COMPETING_DEALER_TRADES_R',
              'S' : 'SPECIALIST_TRADES',
              'T' : 'COMPETING_DEALER_TRADES_T',
              'U' : 'PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY',
              'W' : 'ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER',
              'X' : 'SHORT_EXEMPT_TRANSACTION_FOR_MEMBER_COMPETING_MARKET_MAKER_NOT_AFFILIATED_WITH_THE_FIRM_CLEARING_THE_TRADE',
              'Y' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_AGENCY',
              'Z' : 'SHORT_EXEMPT_TRANSACTION_FOR_NON_MEMBER_COMPETING_MARKET_MAKER'
            }
          },
   '48' : { name: 'SecurityID', type: 'string' },
   '49' : { name: 'SenderCompID', type: 'string' },
   '50' : { name: 'SenderSubID', type: 'string' },
   '51' : { name: 'SendingDate', type: 'localmktdate' },
   '52' : { name: 'SendingTime', type: 'utctimestamp' },
   '53' : { name: 'Shares', type: 'qty' },
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
              '9' : 'CROSS_SHORT'
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
              '6' : 'GOOD_TILL_DATE'
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
   '63' : { name: 'SettlmntTyp', type: 'char',
            enums: {
              '0' : 'REGULAR',
              '1' : 'CASH',
              '2' : 'NEXT_DAY',
              '3' : 'T_PLUS_2',
              '4' : 'T_PLUS_3',
              '5' : 'T_PLUS_4',
              '6' : 'FUTURE',
              '7' : 'WHEN_ISSUED',
              '8' : 'SELLERS_OPTION',
              '9' : 'T_PLUS_5'
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
              '0' : 'NEW',
              '1' : 'REPLACE',
              '2' : 'CANCEL',
              '3' : 'PRELIMINARY',
              '4' : 'CALCULATED',
              '5' : 'CALCULATED_WITHOUT_PRELIMINARY'
            }
          },
   '72' : { name: 'RefAllocID', type: 'string' },
   '73' : { name: 'NoOrders', type: 'int' },
   '74' : { name: 'AvgPrxPrecision', type: 'int' },
   '75' : { name: 'TradeDate', type: 'localmktdate' },
   '76' : { name: 'ExecBroker', type: 'string' },
   '77' : { name: 'OpenClose', type: 'char',
            enums: {
              'C' : 'CLOSE',
              'O' : 'OPEN'
            }
          },
   '78' : { name: 'NoAllocs', type: 'int' },
   '79' : { name: 'AllocAccount', type: 'string' },
   '80' : { name: 'AllocShares', type: 'qty' },
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
   '85' : { name: 'NoDlvyInst', type: 'int' },
   '86' : { name: 'DlvyInst', type: 'string' },
   '87' : { name: 'AllocStatus', type: 'int',
            enums: {
              '0' : 'ACCEPTED',
              '1' : 'REJECTED',
              '2' : 'PARTIAL_ACCEPT',
              '3' : 'RECEIVED'
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
              '7' : 'OTHER'
            }
          },
   '89' : { name: 'Signature', type: 'data' },
   '90' : { name: 'SecureDataLen', type: 'length' },
   '91' : { name: 'SecureData', type: 'data' },
   '92' : { name: 'BrokerOfCredit', type: 'string' },
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
              '2' : 'BROKER_OPTION',
              '3' : 'ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS'
            }
          },
  '103' : { name: 'OrdRejReason', type: 'int',
            enums: {
              '0' : 'BROKER_OPTION',
              '1' : 'UNKNOWN_SYMBOL',
              '2' : 'EXCHANGE_CLOSED',
              '3' : 'ORDER_EXCEEDS_LIMIT',
              '4' : 'TOO_LATE_TO_ENTER',
              '5' : 'UNKNOWN_ORDER',
              '6' : 'DUPLICATE_ORDER',
              '7' : 'DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER',
              '8' : 'STALE_ORDER'
            }
          },
  '104' : { name: 'IOIQualifier', type: 'char',
            enums: {
              'A' : 'ALL_OR_NONE',
              'C' : 'AT_THE_CLOSE',
              'I' : 'IN_TOUCH_WITH',
              'L' : 'LIMIT',
              'M' : 'MORE_BEHIND',
              'O' : 'AT_THE_OPEN',
              'P' : 'TAKING_A_POSITION',
              'Q' : 'AT_THE_MARKET',
              'R' : 'READY_TO_TRADE',
              'S' : 'PORTFOLIO_SHOW_N',
              'T' : 'THROUGH_THE_DAY',
              'V' : 'VERSUS',
              'W' : 'INDICATION',
              'X' : 'CROSSING_OPPORTUNITY',
              'Y' : 'AT_THE_MIDPOINT',
              'Z' : 'PRE_OPEN'
            }
          },
  '105' : { name: 'WaveNo', type: 'string' },
  '106' : { name: 'Issuer', type: 'string' },
  '107' : { name: 'SecurityDesc', type: 'string' },
  '108' : { name: 'HeartBtInt', type: 'int' },
  '109' : { name: 'ClientID', type: 'string' },
  '110' : { name: 'MinQty', type: 'qty' },
  '111' : { name: 'MaxFloor', type: 'qty' },
  '112' : { name: 'TestReqID', type: 'string' },
  '113' : { name: 'ReportToExch', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '114' : { name: 'LocateReqd', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
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
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '122' : { name: 'OrigSendingTime', type: 'utctimestamp' },
  '123' : { name: 'GapFillFlag', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '124' : { name: 'NoExecs', type: 'int' },
  '125' : { name: 'CxlType', type: 'char' },
  '126' : { name: 'ExpireTime', type: 'utctimestamp' },
  '127' : { name: 'DKReason', type: 'char',
            enums: {
              'A' : 'UNKNOWN_SYMBOL',
              'B' : 'WRONG_SIDE',
              'C' : 'QUANTITY_EXCEEDS_ORDER',
              'D' : 'NO_MATCHING_ORDER',
              'E' : 'PRICE_EXCEEDS_LIMIT',
              'Z' : 'OTHER'
            }
          },
  '128' : { name: 'DeliverToCompID', type: 'string' },
  '129' : { name: 'DeliverToSubID', type: 'string' },
  '130' : { name: 'IOINaturalFlag', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '131' : { name: 'QuoteReqID', type: 'string' },
  '132' : { name: 'BidPx', type: 'price' },
  '133' : { name: 'OfferPx', type: 'price' },
  '134' : { name: 'BidSize', type: 'qty' },
  '135' : { name: 'OfferSize', type: 'qty' },
  '136' : { name: 'NoMiscFees', type: 'int' },
  '137' : { name: 'MiscFeeAmt', type: 'amt' },
  '138' : { name: 'MiscFeeCurr', type: 'currency' },
  '139' : { name: 'MiscFeeType', type: 'char',
            enums: {
              '1' : 'REGULATORY',
              '2' : 'TAX',
              '3' : 'LOCAL_COMMISSION',
              '4' : 'EXCHANGE_FEES',
              '5' : 'STAMP',
              '6' : 'LEVY',
              '7' : 'OTHER',
              '8' : 'MARKUP',
              '9' : 'CONSUMPTION_TAX'
            }
          },
  '140' : { name: 'PrevClosePx', type: 'price' },
  '141' : { name: 'ResetSeqNumFlag', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '142' : { name: 'SenderLocationID', type: 'string' },
  '143' : { name: 'TargetLocationID', type: 'string' },
  '144' : { name: 'OnBehalfOfLocationID', type: 'string' },
  '145' : { name: 'DeliverToLocationID', type: 'string' },
  '146' : { name: 'NoRelatedSym', type: 'int' },
  '147' : { name: 'Subject', type: 'string' },
  '148' : { name: 'Headline', type: 'string' },
  '149' : { name: 'URLLink', type: 'string' },
  '150' : { name: 'ExecType', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'PARTIAL_FILL',
              '2' : 'FILL',
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
              'E' : 'PENDING_REPLACE'
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
  '158' : { name: 'AccruedInterestRate', type: 'float' },
  '159' : { name: 'AccruedInterestAmt', type: 'amt' },
  '160' : { name: 'SettlInstMode', type: 'char',
            enums: {
              '0' : 'DEFAULT',
              '1' : 'STANDING_INSTRUCTIONS_PROVIDED',
              '2' : 'SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING',
              '3' : 'SPECIFIC_ALLOCATION_ACCOUNT_STANDING'
            }
          },
  '161' : { name: 'AllocText', type: 'string' },
  '162' : { name: 'SettlInstID', type: 'string' },
  '163' : { name: 'SettlInstTransType', type: 'char',
            enums: {
              'C' : 'CANCEL',
              'N' : 'NEW',
              'R' : 'REPLACE'
            }
          },
  '164' : { name: 'EmailThreadID', type: 'string' },
  '165' : { name: 'SettlInstSource', type: 'char',
            enums: {
              '1' : 'BROKERS_INSTRUCTIONS',
              '2' : 'INSTITUTIONS_INSTRUCTIONS'
            }
          },
  '166' : { name: 'SettlLocation', type: 'string',
            enums: {
              'CED' : 'CEDEL',
              'DTC' : 'DEPOSITORY_TRUST_COMPANY',
              'EUR' : 'EUROCLEAR',
              'FED' : 'FEDERAL_BOOK_ENTRY',
              'ISO Country Code' : 'LOCAL_MARKET_SETTLE_LOCATION',
              'PNY' : 'PHYSICAL',
              'PTC' : 'PARTICIPANT_TRUST_COMPANY'
            }
          },
  '167' : { name: 'SecurityType', type: 'string',
            enums: {
              '?' : 'WILDCARD_ENTRY',
              'BA' : 'BANKERS_ACCEPTANCE',
              'CB' : 'CONVERTIBLE_BOND',
              'CD' : 'CERTIFICATE_OF_DEPOSIT',
              'CMO' : 'COLLATERALIZE_MORTGAGE_OBLIGATION',
              'CORP' : 'CORPORATE_BOND',
              'CP' : 'COMMERCIAL_PAPER',
              'CPP' : 'CORPORATE_PRIVATE_PLACEMENT',
              'CS' : 'COMMON_STOCK',
              'FHA' : 'FEDERAL_HOUSING_AUTHORITY',
              'FHL' : 'FEDERAL_HOME_LOAN',
              'FN' : 'FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION',
              'FOR' : 'FOREIGN_EXCHANGE_CONTRACT',
              'FUT' : 'FUTURE',
              'GN' : 'GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION',
              'GOVT' : 'TREASURIES_PLUS_AGENCY_DEBENTURE',
              'IET' : 'MORTGAGE_IOETTE',
              'MF' : 'MUTUAL_FUND',
              'MIO' : 'MORTGAGE_INTEREST_ONLY',
              'MPO' : 'MORTGAGE_PRINCIPAL_ONLY',
              'MPP' : 'MORTGAGE_PRIVATE_PLACEMENT',
              'MPT' : 'MISCELLANEOUS_PASS_THRU',
              'MUNI' : 'MUNICIPAL_BOND',
              'NONE' : 'NO_ISITC_SECURITY_TYPE',
              'OPT' : 'OPTION',
              'PS' : 'PREFERRED_STOCK',
              'RP' : 'REPURCHASE_AGREEMENT',
              'RVRP' : 'REVERSE_REPURCHASE_AGREEMENT',
              'SL' : 'STUDENT_LOAN_MARKETING_ASSOCIATION',
              'TD' : 'TIME_DEPOSIT',
              'USTB' : 'US_TREASURY_BILL',
              'WAR' : 'WARRANT',
              'ZOO' : 'CATS_TIGERS_LIONS'
            }
          },
  '168' : { name: 'EffectiveTime', type: 'utctimestamp' },
  '169' : { name: 'StandInstDbType', type: 'int',
            enums: {
              '0' : 'OTHER',
              '1' : 'DTC_SID',
              '2' : 'THOMSON_ALERT',
              '3' : 'A_GLOBAL_CUSTODIAN'
            }
          },
  '170' : { name: 'StandInstDbName', type: 'string' },
  '171' : { name: 'StandInstDbID', type: 'string' },
  '172' : { name: 'SettlDeliveryType', type: 'int' },
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
  '199' : { name: 'NoIOIQualifiers', type: 'int' },
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
  '204' : { name: 'CustomerOrFirm', type: 'int',
            enums: {
              '0' : 'CUSTOMER',
              '1' : 'FIRM'
            }
          },
  '205' : { name: 'MaturityDay', type: 'dayofmonth' },
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
              '1' : 'MATCH',
              '2' : 'FORWARD',
              '3' : 'FORWARD_AND_MATCH'
            }
          },
  '210' : { name: 'MaxShow', type: 'qty' },
  '211' : { name: 'PegDifference', type: 'priceoffset' },
  '212' : { name: 'XmlDataLen', type: 'length' },
  '213' : { name: 'XmlData', type: 'data' },
  '214' : { name: 'SettlInstRefID', type: 'string' },
  '215' : { name: 'NoRoutingIDs', type: 'int' },
  '216' : { name: 'RoutingType', type: 'int',
            enums: {
              '1' : 'TARGET_FIRM',
              '2' : 'TARGET_LIST',
              '3' : 'BLOCK_FIRM',
              '4' : 'BLOCK_LIST'
            }
          },
  '217' : { name: 'RoutingID', type: 'string' },
  '218' : { name: 'SpreadToBenchmark', type: 'priceoffset' },
  '219' : { name: 'Benchmark', type: 'char',
            enums: {
              '1' : 'CURVE',
              '2' : '5_YR',
              '3' : 'OLD_5',
              '4' : '10_YR',
              '5' : 'OLD_10',
              '6' : '30_YR',
              '7' : 'OLD_30',
              '8' : '3_MO_LIBOR',
              '9' : '6_MO_LIBOR'
            }
          },
  '223' : { name: 'CouponRate', type: 'float' },
  '231' : { name: 'ContractMultiplier', type: 'float' },
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
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '267' : { name: 'NoMDEntryTypes', type: 'int' },
  '268' : { name: 'NoMDEntries', type: 'int' },
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
              '9' : 'TRADING_SESSION_VWAP_PRICE'
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
              'N' : 'STOPPED_STOCK'
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
              '8' : 'UNSUPPORTED_MDENTRYTYPE'
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
  '286' : { name: 'OpenCloseSettleFlag', type: 'char',
            enums: {
              '0' : 'DAILY_OPEN',
              '1' : 'SESSION_OPEN',
              '2' : 'DELIVERY_SETTLEMENT_PRICE'
            }
          },
  '287' : { name: 'SellerDays', type: 'int' },
  '288' : { name: 'MDEntryBuyer', type: 'string' },
  '289' : { name: 'MDEntrySeller', type: 'string' },
  '290' : { name: 'MDEntryPositionNo', type: 'int' },
  '291' : { name: 'FinancialStatus', type: 'char',
            enums: {
              '1' : 'BANKRUPT'
            }
          },
  '292' : { name: 'CorporateAction', type: 'char',
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
  '295' : { name: 'NoQuoteEntries', type: 'int' },
  '296' : { name: 'NoQuoteSets', type: 'int' },
  '297' : { name: 'QuoteAckStatus', type: 'int',
            enums: {
              '0' : 'ACCEPTED',
              '1' : 'CANCELED_FOR_SYMBOL',
              '2' : 'CANCELED_FOR_SECURITY_TYPE',
              '3' : 'CANCELED_FOR_UNDERLYING',
              '4' : 'CANCELED_ALL',
              '5' : 'REJECTED'
            }
          },
  '298' : { name: 'QuoteCancelType', type: 'int',
            enums: {
              '1' : 'CANCEL_FOR_SYMBOL',
              '2' : 'CANCEL_FOR_SECURITY_TYPE',
              '3' : 'CANCEL_FOR_UNDERLYING_SYMBOL',
              '4' : 'CANCEL_FOR_ALL_QUOTES'
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
              '9' : 'NOT_AUTHORIZED_TO_QUOTE_SECURITY'
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
  '304' : { name: 'TotQuoteEntries', type: 'int' },
  '305' : { name: 'UnderlyingIDSource', type: 'string' },
  '306' : { name: 'UnderlyingIssuer', type: 'string' },
  '307' : { name: 'UnderlyingSecurityDesc', type: 'string' },
  '308' : { name: 'UnderlyingSecurityExchange', type: 'exchange' },
  '309' : { name: 'UnderlyingSecurityID', type: 'string' },
  '310' : { name: 'UnderlyingSecurityType', type: 'string' },
  '311' : { name: 'UnderlyingSymbol', type: 'string' },
  '312' : { name: 'UnderlyingSymbolSfx', type: 'string' },
  '313' : { name: 'UnderlyingMaturityMonthYear', type: 'monthyear' },
  '314' : { name: 'UnderlyingMaturityDay', type: 'dayofmonth' },
  '315' : { name: 'UnderlyingPutOrCall', type: 'int' },
  '316' : { name: 'UnderlyingStrikePrice', type: 'price' },
  '317' : { name: 'UnderlyingOptAttribute', type: 'char' },
  '318' : { name: 'UnderlyingCurrency', type: 'currency' },
  '319' : { name: 'RatioQty', type: 'qty' },
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
              '3' : 'LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST',
              '4' : 'LIST_OF_SECURITIES_RETURNED_PER_REQUEST',
              '5' : 'REJECT_SECURITY_PROPOSAL',
              '6' : 'CAN_NOT_MATCH_SELECTION_CRITERIA'
            }
          },
  '324' : { name: 'SecurityStatusReqID', type: 'string' },
  '325' : { name: 'UnsolicitedIndicator', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '326' : { name: 'SecurityTradingStatus', type: 'int',
            enums: {
              '1' : 'OPENING_DELAY',
              '10' : 'MARKET_ON_CLOSE_IMBALANCE_SELL',
              '12' : 'NO_MARKET_IMBALANCE',
              '13' : 'NO_MARKET_ON_CLOSE_IMBALANCE',
              '14' : 'ITS_PRE_OPENING',
              '15' : 'NEW_PRICE_INDICATION',
              '16' : 'TRADE_DISSEMINATION_TIME',
              '17' : 'READY_TO_TRADE',
              '18' : 'NOT_AVAILABLE_FOR_TRADING',
              '19' : 'NOT_TRADED_ON_THIS_MARKET',
              '2' : 'TRADING_HALT',
              '20' : 'UNKNOWN_OR_INVALID',
              '3' : 'RESUME',
              '4' : 'NO_OPEN_NO_RESUME',
              '5' : 'PRICE_INDICATION',
              '6' : 'TRADING_RANGE_INDICATION',
              '7' : 'MARKET_IMBALANCE_BUY',
              '8' : 'MARKET_IMBALANCE_SELL',
              '9' : 'MARKET_ON_CLOSE_IMBALANCE_BUY'
            }
          },
  '327' : { name: 'HaltReasonChar', type: 'char',
            enums: {
              'D' : 'NEWS_DISSEMINATION',
              'E' : 'ORDER_INFLUX',
              'I' : 'ORDER_IMBALANCE',
              'M' : 'ADDITIONAL_INFORMATION',
              'P' : 'NEWS_PENDING',
              'X' : 'EQUIPMENT_CHANGEOVER'
            }
          },
  '328' : { name: 'InViewOfCommon', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '329' : { name: 'DueToRelated', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
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
              '1' : 'HALTED',
              '2' : 'OPEN',
              '3' : 'CLOSED',
              '4' : 'PRE_OPEN',
              '5' : 'PRE_CLOSE'
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
              'EUC-JP' : 'EUC_JP',
              'ISO-2022-JP' : 'ISO_2022_JP',
              'SHIFT_JIS' : 'SHIFT_JIS',
              'UTF-8' : 'UTF_8'
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
  '368' : { name: 'QuoteEntryRejectReason', type: 'int',
            enums: {
              '1' : 'UNKNOWN_SYMBOL',
              '2' : 'EXCHANGE',
              '3' : 'QUOTE_EXCEEDS_LIMIT',
              '4' : 'TOO_LATE_TO_ENTER',
              '5' : 'UNKNOWN_QUOTE',
              '6' : 'DUPLICATE_QUOTE',
              '7' : 'INVALID_BID_ASK_SPREAD',
              '8' : 'INVALID_PRICE',
              '9' : 'NOT_AUTHORIZED_TO_QUOTE_SECURITY'
            }
          },
  '369' : { name: 'LastMsgSeqNumProcessed', type: 'int' },
  '370' : { name: 'OnBehalfOfSendingTime', type: 'utctimestamp' },
  '371' : { name: 'RefTagID', type: 'int' },
  '372' : { name: 'RefMsgType', type: 'string' },
  '373' : { name: 'SessionRejectReason', type: 'int',
            enums: {
              '0' : 'INVALID_TAG_NUMBER',
              '1' : 'REQUIRED_TAG_MISSING',
              '10' : 'SENDINGTIME_ACCURACY_PROBLEM',
              '11' : 'INVALID_MSGTYPE',
              '2' : 'TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE',
              '3' : 'UNDEFINED_TAG',
              '4' : 'TAG_SPECIFIED_WITHOUT_A_VALUE',
              '5' : 'VALUE_IS_INCORRECT',
              '6' : 'INCORRECT_DATA_FORMAT_FOR_VALUE',
              '7' : 'DECRYPTION_PROBLEM',
              '8' : 'SIGNATURE_PROBLEM',
              '9' : 'COMPID_PROBLEM'
            }
          },
  '374' : { name: 'BidRequestTransType', type: 'char',
            enums: {
              'C' : 'CANCEL',
              'N' : 'NO'
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
              '0' : 'GT_CORPORATE_ACTION',
              '1' : 'GT_RENEWAL',
              '2' : 'VERBAL_CHANGE',
              '3' : 'REPRICING_OF_ORDER',
              '4' : 'BROKER_OPTION',
              '5' : 'PARTIAL_DECLINE_OF_ORDERQTY'
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
              '5' : 'CONDITIONALLY_REQUIRED_FIELD_MISSING'
            }
          },
  '381' : { name: 'GrossTradeAmt', type: 'amt' },
  '382' : { name: 'NoContraBrokers', type: 'int' },
  '383' : { name: 'MaxMessageSize', type: 'int' },
  '384' : { name: 'NoMsgTypes', type: 'int' },
  '385' : { name: 'MsgDirection', type: 'char',
            enums: {
              'R' : 'RECEIVE',
              'S' : 'SEND'
            }
          },
  '386' : { name: 'NoTradingSessions', type: 'int' },
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
  '394' : { name: 'BidType', type: 'int' },
  '395' : { name: 'NumTickets', type: 'int' },
  '396' : { name: 'SideValue1', type: 'amt' },
  '397' : { name: 'SideValue2', type: 'amt' },
  '398' : { name: 'NoBidDescriptors', type: 'int' },
  '399' : { name: 'BidDescriptorType', type: 'int' },
  '400' : { name: 'BidDescriptor', type: 'string' },
  '401' : { name: 'SideValueInd', type: 'int' },
  '402' : { name: 'LiquidityPctLow', type: 'float' },
  '403' : { name: 'LiquidityPctHigh', type: 'float' },
  '404' : { name: 'LiquidityValue', type: 'amt' },
  '405' : { name: 'EFPTrackingError', type: 'float' },
  '406' : { name: 'FairValue', type: 'amt' },
  '407' : { name: 'OutsideIndexPct', type: 'float' },
  '408' : { name: 'ValueOfFutures', type: 'amt' },
  '409' : { name: 'LiquidityIndType', type: 'int',
            enums: {
              '1' : '5_DAY_MOVING_AVERAGE',
              '2' : '20_DAY_MOVING_AVERAGE',
              '3' : 'NORMAL_MARKET_SIZE',
              '4' : 'OTHER'
            }
          },
  '410' : { name: 'WtAverageLiquidity', type: 'float' },
  '411' : { name: 'ExchangeForPhysical', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '412' : { name: 'OutMainCntryUIndex', type: 'amt' },
  '413' : { name: 'CrossPercent', type: 'float' },
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
  '418' : { name: 'TradeType', type: 'char',
            enums: {
              'A' : 'AGENCY',
              'G' : 'VWAP_GUARANTEE',
              'J' : 'GUARANTEED_CLOSE',
              'R' : 'RISK_TRADE'
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
  '420' : { name: 'NoBidComponents', type: 'int' },
  '421' : { name: 'Country', type: 'string' },
  '422' : { name: 'TotNoStrikes', type: 'int' },
  '423' : { name: 'PriceType', type: 'int',
            enums: {
              '1' : 'PERCENTAGE',
              '2' : 'PER_SHARE',
              '3' : 'FIXED_AMOUNT'
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
  '428' : { name: 'NoStrikes', type: 'int' },
  '429' : { name: 'ListStatusType', type: 'int' },
  '430' : { name: 'NetGrossInd', type: 'int',
            enums: {
              '1' : 'NET',
              '2' : 'GROSS'
            }
          },
  '431' : { name: 'ListOrderStatus', type: 'int' },
  '432' : { name: 'ExpireDate', type: 'localmktdate' },
  '433' : { name: 'ListExecInstType', type: 'char',
            enums: {
              '1' : 'IMMEDIATE',
              '2' : 'WAIT_FOR_EXECUTE_INSTRUCTION'
            }
          },
  '434' : { name: 'CxlRejResponseTo', type: 'char',
            enums: {
              '1' : 'ORDER_CANCEL_REQUEST',
              '2' : 'ORDER_CANCEL_REPLACE_REQUEST'
            }
          },
  '435' : { name: 'UnderlyingCouponRate', type: 'float' },
  '436' : { name: 'UnderlyingContractMultiplier', type: 'float' },
  '437' : { name: 'ContraTradeQty', type: 'qty' },
  '438' : { name: 'ContraTradeTime', type: 'utctimestamp' },
  '439' : { name: 'ClearingFirm', type: 'string' },
  '440' : { name: 'ClearingAccount', type: 'string' },
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
}
  };
