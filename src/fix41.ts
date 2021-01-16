export const FIX41_FIELDS = {
  version : '4.1',
  fields : {
    '1' : { name: 'Account', type: 'char' },
    '2' : { name: 'AdvId', type: 'char' },
    '3' : { name: 'AdvRefID', type: 'char' },
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
   '17' : { name: 'ExecID', type: 'char' },
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
              'S' : 'SUSPEND',
              'U' : 'CUSTOMER_DISPLAY_INSTRUCTION',
              'V' : 'NETTING'
            }
          },
   '19' : { name: 'ExecRefID', type: 'char' },
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
              '5' : 'RIC_CODE',
              '6' : 'ISO_CURRENCY_CODE',
              '7' : 'ISO_COUNTRY_CODE'
            }
          },
   '23' : { name: 'IOIid', type: 'char' },
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
   '26' : { name: 'IOIRefID', type: 'char' },
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
              'S' : 'QUOTE',
              'T' : 'SETTLEMENT_INSTRUCTIONS'
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
              'C' : 'FOREX_C',
              'D' : 'PREVIOUSLY_QUOTED',
              'E' : 'PREVIOUSLY_INDICATED',
              'F' : 'FOREX_F',
              'G' : 'FOREX_G',
              'H' : 'FOREX_H',
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
              '6' : 'SELL_SHORT_EXEMPT',
              '7' : 'UNDISCLOSED',
              '8' : 'CROSS'
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
   '70' : { name: 'AllocID', type: 'char' },
   '71' : { name: 'AllocTransType', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'REPLACE',
              '2' : 'CANCEL',
              '3' : 'PRELIMINARY',
              '4' : 'CALCULATED'
            }
          },
   '72' : { name: 'RefAllocID', type: 'char' },
   '73' : { name: 'NoOrders', type: 'int' },
   '74' : { name: 'AvgPrxPrecision', type: 'int' },
   '75' : { name: 'TradeDate', type: 'date' },
   '76' : { name: 'ExecBroker', type: 'char' },
   '77' : { name: 'OpenClose', type: 'char',
            enums: {
              'C' : 'CLOSE',
              'O' : 'OPEN'
            }
          },
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
   '97' : { name: 'PossResend', type: 'char',
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
   '99' : { name: 'StopPx', type: 'float' },
  '100' : { name: 'ExDestination', type: 'char' },
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
              '4' : 'TOO_LATE_TO_ENTER',
              '5' : 'UNKNOWN_ORDER',
              '6' : 'DUPLICATE_ORDER'
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
              'S' : 'PORTFOLIO_SHOW_N',
              'T' : 'THROUGH_THE_DAY',
              'V' : 'VERSUS',
              'W' : 'INDICATION',
              'X' : 'CROSSING_OPPORTUNITY',
              'Y' : 'AT_THE_MIDPOINT',
              'Z' : 'PRE_OPEN'
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
              '7' : 'OTHER',
              '8' : 'MARKUP'
            }
          },
  '140' : { name: 'PrevClosePx', type: 'float' },
  '141' : { name: 'ResetSeqNumFlag', type: 'char',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '142' : { name: 'SenderLocationID', type: 'char' },
  '143' : { name: 'TargetLocationID', type: 'char' },
  '144' : { name: 'OnBehalfOfLocationID', type: 'char' },
  '145' : { name: 'DeliverToLocationID', type: 'char' },
  '146' : { name: 'NoRelatedSym', type: 'int' },
  '147' : { name: 'Subject', type: 'char' },
  '148' : { name: 'Headline', type: 'char' },
  '149' : { name: 'URLLink', type: 'char' },
  '150' : { name: 'ExecType', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'PARTIAL_FILL',
              '2' : 'FILL',
              '3' : 'DONE_FOR_DAY',
              '4' : 'CANCELLED',
              '5' : 'REPLACE',
              '6' : 'PENDING_CANCEL_REPLACE',
              '7' : 'STOPPED',
              '8' : 'REJECTED',
              '9' : 'SUSPENDED',
              'A' : 'PENDING_NEW',
              'B' : 'CALCULATED',
              'C' : 'EXPIRED'
            }
          },
  '151' : { name: 'LeavesQty', type: 'int' },
  '152' : { name: 'CashOrderQty', type: 'float' },
  '153' : { name: 'AllocAvgPx', type: 'float' },
  '154' : { name: 'AllocNetMoney', type: 'float' },
  '155' : { name: 'SettlCurrFxRate', type: 'float' },
  '156' : { name: 'SettlCurrFxRateCalc', type: 'char',
            enums: {
              'M' : 'MULTIPLY',
              'D' : 'DIVIDE'
            }
          },
  '157' : { name: 'NumDaysInterest', type: 'int' },
  '158' : { name: 'AccruedInterestRate', type: 'float' },
  '159' : { name: 'AccruedInterestAmt', type: 'float' },
  '160' : { name: 'SettlInstMode', type: 'char',
            enums: {
              '0' : 'DEFAULT',
              '1' : 'STANDING_INSTRUCTIONS_PROVIDED',
              '2' : 'SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING',
              '3' : 'SPECIFIC_ALLOCATION_ACCOUNT_STANDING'
            }
          },
  '161' : { name: 'AllocText', type: 'char' },
  '162' : { name: 'SettlInstID', type: 'char' },
  '163' : { name: 'SettlInstTransType', type: 'char',
            enums: {
              'C' : 'CANCEL',
              'N' : 'NEW',
              'R' : 'REPLACE'
            }
          },
  '164' : { name: 'EmailThreadID', type: 'char' },
  '165' : { name: 'SettlInstSource', type: 'char',
            enums: {
              '1' : 'BROKERS_INSTRUCTIONS',
              '2' : 'INSTITUTIONS_INSTRUCTIONS'
            }
          },
  '166' : { name: 'SettlLocation', type: 'char',
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
  '167' : { name: 'SecurityType', type: 'char',
            enums: {
              'BA' : 'BANKERS_ACCEPTANCE',
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
              'MF' : 'MUTUAL_FUND',
              'MIO' : 'MORTGAGE_INTEREST_ONLY',
              'MPO' : 'MORTGAGE_PRINCIPLE_ONLY',
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
  '168' : { name: 'EffectiveTime', type: 'time' },
  '169' : { name: 'StandInstDbType', type: 'int',
            enums: {
              '0' : 'OTHER',
              '1' : 'DTC_SID',
              '2' : 'THOMSON_ALERT',
              '3' : 'A_GLOBAL_CUSTODIAN'
            }
          },
  '170' : { name: 'StandInstDbName', type: 'char' },
  '171' : { name: 'StandInstDbID', type: 'char' },
  '172' : { name: 'SettlDeliveryType', type: 'int' },
  '173' : { name: 'SettlDepositoryCode', type: 'char' },
  '174' : { name: 'SettlBrkrCode', type: 'char' },
  '175' : { name: 'SettlInstCode', type: 'char' },
  '176' : { name: 'SecuritySettlAgentName', type: 'char' },
  '177' : { name: 'SecuritySettlAgentCode', type: 'char' },
  '178' : { name: 'SecuritySettlAgentAcctNum', type: 'char' },
  '179' : { name: 'SecuritySettlAgentAcctName', type: 'char' },
  '180' : { name: 'SecuritySettlAgentContactName', type: 'char' },
  '181' : { name: 'SecuritySettlAgentContactPhone', type: 'char' },
  '182' : { name: 'CashSettlAgentName', type: 'char' },
  '183' : { name: 'CashSettlAgentCode', type: 'char' },
  '184' : { name: 'CashSettlAgentAcctNum', type: 'char' },
  '185' : { name: 'CashSettlAgentAcctName', type: 'char' },
  '186' : { name: 'CashSettlAgentContactName', type: 'char' },
  '187' : { name: 'CashSettlAgentContactPhone', type: 'char' },
  '188' : { name: 'BidSpotRate', type: 'float' },
  '189' : { name: 'BidForwardPoints', type: 'float' },
  '190' : { name: 'OfferSpotRate', type: 'float' },
  '191' : { name: 'OfferForwardPoints', type: 'float' },
  '192' : { name: 'OrderQty2', type: 'float' },
  '193' : { name: 'FutSettDate2', type: 'date' },
  '194' : { name: 'LastSpotRate', type: 'float' },
  '195' : { name: 'LastForwardPoints', type: 'float' },
  '196' : { name: 'AllocLinkID', type: 'char' },
  '197' : { name: 'AllocLinkType', type: 'int',
            enums: {
              '0' : 'F_X_NETTING',
              '1' : 'F_X_SWAP'
            }
          },
  '198' : { name: 'SecondaryOrderID', type: 'char' },
  '199' : { name: 'NoIOIQualifiers', type: 'int' },
  '200' : { name: 'MaturityMonthYear', type: 'monthyear' },
  '201' : { name: 'PutOrCall', type: 'int',
            enums: {
              '0' : 'PUT',
              '1' : 'CALL'
            }
          },
  '202' : { name: 'StrikePrice', type: 'float' },
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
  '207' : { name: 'SecurityExchange', type: 'char' },
  '208' : { name: 'NotifyBrokerOfCredit', type: 'char',
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
  '210' : { name: 'MaxShow', type: 'int' },
  '211' : { name: 'PegDifference', type: 'float' },
}
  };
