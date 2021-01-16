export const FIX40_FIELDS = {
  version : '4.0',
  fields : {
    '1' : { name: 'Account', type: 'char' },
    '2' : { name: 'AdvId', type: 'int' },
    '3' : { name: 'AdvRefID', type: 'int' },
    '4' : { name: 'AdvSide', type: 'char',
            enums: {
              'B' : 'BUY',
              'S' : 'SELL',
              'T' : 'TRADE',
              'X' : 'CROSS'
            }
          },
    '5' : { name: 'AdvTransType', type: 'char',
            enums: {
              'C' : 'CANCEL',
              'N' : 'NEW',
              'R' : 'REPLACE'
            }
          },
    '6' : { name: 'AvgPx', type: 'float' },
    '7' : { name: 'BeginSeqNo', type: 'int' },
    '8' : { name: 'BeginString', type: 'char' },
    '9' : { name: 'BodyLength', type: 'int' },
   '10' : { name: 'CheckSum', type: 'char' },
   '11' : { name: 'ClOrdID', type: 'char' },
   '12' : { name: 'Commission', type: 'float' },
   '13' : { name: 'CommType', type: 'char',
            enums: {
              '1' : 'PER_SHARE',
              '2' : 'PERCENTAGE',
              '3' : 'ABSOLUTE'
            }
          },
   '14' : { name: 'CumQty', type: 'int' },
   '15' : { name: 'Currency', type: 'char' },
   '16' : { name: 'EndSeqNo', type: 'int' },
   '17' : { name: 'ExecID', type: 'int' },
   '18' : { name: 'ExecInst', type: 'char',
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
              'S' : 'SUSPEND'
            }
          },
   '19' : { name: 'ExecRefID', type: 'int' },
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
   '22' : { name: 'IDSource', type: 'char',
            enums: {
              '1' : 'CUSIP',
              '2' : 'SEDOL',
              '3' : 'QUIK',
              '4' : 'ISIN_NUMBER',
              '5' : 'RIC_CODE'
            }
          },
   '23' : { name: 'IOIid', type: 'int' },
   '24' : { name: 'IOIOthSvc', type: 'char',
            enums: {
              'A' : 'AUTEX',
              'B' : 'BRIDGE'
            }
          },
   '25' : { name: 'IOIQltyInd', type: 'char',
            enums: {
              'H' : 'HIGH',
              'L' : 'LOW',
              'M' : 'MEDIUM'
            }
          },
   '26' : { name: 'IOIRefID', type: 'int' },
   '27' : { name: 'IOIShares', type: 'char',
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
   '30' : { name: 'LastMkt', type: 'char' },
   '31' : { name: 'LastPx', type: 'float' },
   '32' : { name: 'LastShares', type: 'int' },
   '33' : { name: 'LinesOfText', type: 'int' },
   '34' : { name: 'MsgSeqNum', type: 'int' },
   '35' : { name: 'MsgType', type: 'char',
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
              'D' : 'ORDER_D',
              'E' : 'ORDER_E',
              'F' : 'ORDER_CANCEL_REQUEST',
              'G' : 'ORDER_CANCEL_REPLACE_REQUEST',
              'H' : 'ORDER_STATUS_REQUEST',
              'J' : 'ALLOCATION',
              'K' : 'LIST_CANCEL_REQUEST',
              'L' : 'LIST_EXECUTE',
              'M' : 'LIST_STATUS_REQUEST',
              'N' : 'LIST_STATUS',
              'P' : 'ALLOCATION_ACK',
              'Q' : 'DONT_KNOW_TRADE',
              'R' : 'QUOTE_REQUEST',
              'S' : 'QUOTE'
            }
          },
   '36' : { name: 'NewSeqNo', type: 'int' },
   '37' : { name: 'OrderID', type: 'char' },
   '38' : { name: 'OrderQty', type: 'int' },
   '39' : { name: 'OrdStatus', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'PARTIALLY_FILLED',
              '2' : 'FILLED',
              '3' : 'DONE_FOR_DAY',
              '4' : 'CANCELED',
              '5' : 'REPLACED',
              '6' : 'PENDING_CANCEL_REPLACE',
              '7' : 'STOPPED',
              '8' : 'REJECTED',
              '9' : 'SUSPENDED',
              'A' : 'PENDING_NEW',
              'B' : 'CALCULATED',
              'C' : 'EXPIRED'
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
              'C' : 'FOREX',
              'D' : 'PREVIOUSLY_QUOTED',
              'E' : 'PREVIOUSLY_INDICATED',
              'P' : 'PEGGED'
            }
          },
   '41' : { name: 'OrigClOrdID', type: 'char' },
   '42' : { name: 'OrigTime', type: 'time' },
   '43' : { name: 'PossDupFlag', type: 'char',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
   '44' : { name: 'Price', type: 'float' },
   '45' : { name: 'RefSeqNum', type: 'int' },
   '46' : { name: 'RelatdSym', type: 'char' },
   '47' : { name: 'Rule80A', type: 'char',
            enums: {
              'A' : 'AGENCY_SINGLE_ORDER',
              'C' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_MEMBER_FIRM_ORG',
              'D' : 'PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRM_ORG',
              'I' : 'INDIVIDUAL_INVESTOR_SINGLE_ORDER',
              'J' : 'PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER',
              'K' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER',
              'M' : 'PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER',
              'N' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_MEMBER',
              'U' : 'PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY',
              'W' : 'ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER',
              'Y' : 'PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_AGENCY'
            }
          },
   '48' : { name: 'SecurityID', type: 'char' },
   '49' : { name: 'SenderCompID', type: 'char' },
   '50' : { name: 'SenderSubID', type: 'char' },
   '52' : { name: 'SendingTime', type: 'time' },
   '53' : { name: 'Shares', type: 'int' },
   '54' : { name: 'Side', type: 'char',
            enums: {
              '1' : 'BUY',
              '2' : 'SELL',
              '3' : 'BUY_MINUS',
              '4' : 'SELL_PLUS',
              '5' : 'SELL_SHORT',
              '6' : 'SELL_SHORT_EXEMPT'
            }
          },
   '55' : { name: 'Symbol', type: 'char' },
   '56' : { name: 'TargetCompID', type: 'char' },
   '57' : { name: 'TargetSubID', type: 'char' },
   '58' : { name: 'Text', type: 'char' },
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
   '60' : { name: 'TransactTime', type: 'time' },
   '61' : { name: 'Urgency', type: 'char',
            enums: {
              '0' : 'NORMAL',
              '1' : 'FLASH',
              '2' : 'BACKGROUND'
            }
          },
   '62' : { name: 'ValidUntilTime', type: 'time' },
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
   '64' : { name: 'FutSettDate', type: 'date' },
   '65' : { name: 'SymbolSfx', type: 'char' },
   '66' : { name: 'ListID', type: 'char' },
   '67' : { name: 'ListSeqNo', type: 'int' },
   '68' : { name: 'ListNoOrds', type: 'int' },
   '69' : { name: 'ListExecInst', type: 'char' },
   '70' : { name: 'AllocID', type: 'int' },
   '71' : { name: 'AllocTransType', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'REPLACE',
              '2' : 'CANCEL'
            }
          },
   '72' : { name: 'RefAllocID', type: 'int' },
   '73' : { name: 'NoOrders', type: 'int' },
   '74' : { name: 'AvgPrxPrecision', type: 'int' },
   '75' : { name: 'TradeDate', type: 'date' },
   '76' : { name: 'ExecBroker', type: 'char' },
   '77' : { name: 'OpenClose', type: 'char' },
   '78' : { name: 'NoAllocs', type: 'int' },
   '79' : { name: 'AllocAccount', type: 'char' },
   '80' : { name: 'AllocShares', type: 'int' },
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
   '84' : { name: 'CxlQty', type: 'int' },
   '85' : { name: 'NoDlvyInst', type: 'int' },
   '86' : { name: 'DlvyInst', type: 'char' },
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
   '92' : { name: 'BrokerOfCredit', type: 'char' },
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
   '97' : { name: 'PossResend', type: 'char' },
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
   '99' : { name: 'StopPx', type: 'float' },
  '100' : { name: 'ExDestination', type: 'char',
            enums: {
              '0' : 'NONE',
              '4' : 'POSIT'
            }
          },
  '102' : { name: 'CxlRejReason', type: 'int',
            enums: {
              '0' : 'TOO_LATE_TO_CANCEL',
              '1' : 'UNKNOWN_ORDER'
            }
          },
  '103' : { name: 'OrdRejReason', type: 'int',
            enums: {
              '0' : 'BROKER_OPTION',
              '1' : 'UNKNOWN_SYMBOL',
              '2' : 'EXCHANGE_CLOSED',
              '3' : 'ORDER_EXCEEDS_LIMIT',
              '4' : 'TOO_LATE_TO_ENTER'
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
              'Q' : 'CURRENT_QUOTE',
              'S' : 'PORTFOLIO_SHOW_N',
              'T' : 'THROUGH_THE_DAY',
              'V' : 'VERSUS',
              'W' : 'INDICATION',
              'X' : 'CROSSING_OPPORTUNITY'
            }
          },
  '105' : { name: 'WaveNo', type: 'char' },
  '106' : { name: 'Issuer', type: 'char' },
  '107' : { name: 'SecurityDesc', type: 'char' },
  '108' : { name: 'HeartBtInt', type: 'int' },
  '109' : { name: 'ClientID', type: 'char' },
  '110' : { name: 'MinQty', type: 'int' },
  '111' : { name: 'MaxFloor', type: 'int' },
  '112' : { name: 'TestReqID', type: 'char' },
  '113' : { name: 'ReportToExch', type: 'char',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '114' : { name: 'LocateReqd', type: 'char',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '115' : { name: 'OnBehalfOfCompID', type: 'char' },
  '116' : { name: 'OnBehalfOfSubID', type: 'char' },
  '117' : { name: 'QuoteID', type: 'char' },
  '118' : { name: 'NetMoney', type: 'float' },
  '119' : { name: 'SettlCurrAmt', type: 'float' },
  '120' : { name: 'SettlCurrency', type: 'char' },
  '121' : { name: 'ForexReq', type: 'char',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '122' : { name: 'OrigSendingTime', type: 'time' },
  '123' : { name: 'GapFillFlag', type: 'char',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '124' : { name: 'NoExecs', type: 'int' },
  '125' : { name: 'CxlType', type: 'char',
            enums: {
              'F' : 'FULL_REMAINING_QUANTITY',
              'P' : 'PARTIAL_CANCEL'
            }
          },
  '126' : { name: 'ExpireTime', type: 'time' },
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
  '128' : { name: 'DeliverToCompID', type: 'char' },
  '129' : { name: 'DeliverToSubID', type: 'char' },
  '130' : { name: 'IOINaturalFlag', type: 'char',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '131' : { name: 'QuoteReqID', type: 'char' },
  '132' : { name: 'BidPx', type: 'float' },
  '133' : { name: 'OfferPx', type: 'float' },
  '134' : { name: 'BidSize', type: 'int' },
  '135' : { name: 'OfferSize', type: 'int' },
  '136' : { name: 'NoMiscFees', type: 'int' },
  '137' : { name: 'MiscFeeAmt', type: 'float' },
  '138' : { name: 'MiscFeeCurr', type: 'char' },
  '139' : { name: 'MiscFeeType', type: 'char',
            enums: {
              '1' : 'REGULATORY',
              '2' : 'TAX',
              '3' : 'LOCAL_COMMISSION',
              '4' : 'EXCHANGE_FEES',
              '5' : 'STAMP',
              '6' : 'LEVY',
              '7' : 'OTHER'
            }
          },
  '140' : { name: 'PrevClosePx', type: 'float' },
}
  };
