export const FIX50SP2_FIELDS = {
  version : '5.0',
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
              '2' : 'PERCENT',
              '3' : 'ABSOLUTE',
              '4' : 'PERCENTAGE_WAIVED_4',
              '5' : 'PERCENTAGE_WAIVED_5',
              '6' : 'POINTS_PER_BOND_OR_CONTRACT'
            }
          },
   '14' : { name: 'CumQty', type: 'qty' },
   '15' : { name: 'Currency', type: 'currency' },
   '16' : { name: 'EndSeqNo', type: 'seqnum' },
   '17' : { name: 'ExecID', type: 'string' },
   '18' : { name: 'ExecInst', type: 'multiplecharvalue',
            enums: {
              '0' : 'STAY_ON_OFFER_SIDE',
              '1' : 'NOT_HELD',
              '2' : 'WORK',
              '3' : 'GO_ALONG',
              '4' : 'OVER_THE_DAY',
              '5' : 'HELD',
              '6' : 'PARTICIPATE_DONT_INITIATE',
              '7' : 'STRICT_SCALE',
              '8' : 'TRY_TO_SCALE',
              '9' : 'STAY_ON_BID_SIDE',
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
              'T' : 'FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER',
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
              'e' : 'WORK_TO_TARGET_STRATEGY',
              'f' : 'INTERMARKET_SWEEP',
              'g' : 'EXTERNAL_ROUTING_ALLOWED',
              'h' : 'EXTERNAL_ROUTING_NOT_ALLOWED',
              'i' : 'IMBALANCE_ONLY',
              'j' : 'SINGLE_EXECUTION_REQUESTED_FOR_BLOCK_TRADE',
              'k' : 'BEST_EXECUTION',
              'l' : 'SUSPEND_ON_SYSTEM_FAILURE',
              'm' : 'SUSPEND_ON_TRADING_HALT',
              'n' : 'REINSTATE_ON_CONNECTION_LOSS',
              'o' : 'CANCEL_ON_CONNECTION_LOSS',
              'p' : 'SUSPEND_ON_CONNECTION_LOSS',
              'q' : 'RELEASE_FROM_SUSPENSION',
              'r' : 'EXECUTE_AS_DELTA_NEUTRAL_USING_VOLATILITY_PROVIDED',
              's' : 'EXECUTE_AS_DURATION_NEUTRAL',
              't' : 'EXECUTE_AS_FX_NEUTRAL'
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
              'J' : 'OPTION_PRICE_REPORTING_AUTHORITY',
              'K' : 'ISDA_FPML_PRODUCT_URL',
              'L' : 'LETTER_OF_CREDIT',
              'M' : 'MARKETPLACE_ASSIGNED_IDENTIFIER'
            }
          },
   '23' : { name: 'IOIID', type: 'string' },
   '25' : { name: 'IOIQltyInd', type: 'char',
            enums: {
              'H' : 'HIGH',
              'L' : 'LOW',
              'M' : 'MEDIUM'
            }
          },
   '26' : { name: 'IOIRefID', type: 'string' },
   '27' : { name: 'IOIQty', type: 'string',
            enums: {
              'S' : 'SMALL',
              'M' : 'MEDIUM',
              'L' : 'LARGE',
              'U' : 'UNDISCLOSED_QUANTITY'
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
              '1' : 'TESTREQUEST',
              '2' : 'RESENDREQUEST',
              '3' : 'REJECT',
              '4' : 'SEQUENCERESET',
              '5' : 'LOGOUT',
              '6' : 'IOI',
              '7' : 'ADVERTISEMENT',
              '8' : 'EXECUTIONREPORT',
              '9' : 'ORDERCANCELREJECT',
              'A' : 'LOGON',
              'AA' : 'DERIVATIVESECURITYLIST',
              'AB' : 'NEWORDERMULTILEG',
              'AC' : 'MULTILEGORDERCANCELREPLACE',
              'AD' : 'TRADECAPTUREREPORTREQUEST',
              'AE' : 'TRADECAPTUREREPORT',
              'AF' : 'ORDERMASSSTATUSREQUEST',
              'AG' : 'QUOTEREQUESTREJECT',
              'AH' : 'RFQREQUEST',
              'AI' : 'QUOTESTATUSREPORT',
              'AJ' : 'QUOTERESPONSE',
              'AK' : 'CONFIRMATION',
              'AL' : 'POSITIONMAINTENANCEREQUEST',
              'AM' : 'POSITIONMAINTENANCEREPORT',
              'AN' : 'REQUESTFORPOSITIONS',
              'AO' : 'REQUESTFORPOSITIONSACK',
              'AP' : 'POSITIONREPORT',
              'AQ' : 'TRADECAPTUREREPORTREQUESTACK',
              'AR' : 'TRADECAPTUREREPORTACK',
              'AS' : 'ALLOCATIONREPORT',
              'AT' : 'ALLOCATIONREPORTACK',
              'AU' : 'CONFIRMATIONACK',
              'AV' : 'SETTLEMENTINSTRUCTIONREQUEST',
              'AW' : 'ASSIGNMENTREPORT',
              'AX' : 'COLLATERALREQUEST',
              'AY' : 'COLLATERALASSIGNMENT',
              'AZ' : 'COLLATERALRESPONSE',
              'B' : 'NEWS',
              'BA' : 'COLLATERALREPORT',
              'BB' : 'COLLATERALINQUIRY',
              'BC' : 'NETWORKCOUNTERPARTYSYSTEMSTATUSREQUEST',
              'BD' : 'NETWORKCOUNTERPARTYSYSTEMSTATUSRESPONSE',
              'BE' : 'USERREQUEST',
              'BF' : 'USERRESPONSE',
              'BG' : 'COLLATERALINQUIRYACK',
              'BH' : 'CONFIRMATIONREQUEST',
              'BI' : 'TRADINGSESSIONLISTREQUEST',
              'BJ' : 'TRADINGSESSIONLIST',
              'BK' : 'SECURITYLISTUPDATEREPORT',
              'BL' : 'ADJUSTEDPOSITIONREPORT',
              'BM' : 'ALLOCATIONINSTRUCTIONALERT',
              'BN' : 'EXECUTIONACKNOWLEDGEMENT',
              'BO' : 'CONTRARYINTENTIONREPORT',
              'BP' : 'SECURITYDEFINITIONUPDATEREPORT',
              'BQ' : 'SETTLEMENTOBLIGATIONREPORT',
              'BR' : 'DERIVATIVESECURITYLISTUPDATEREPORT',
              'BS' : 'TRADINGSESSIONLISTUPDATEREPORT',
              'BT' : 'MARKETDEFINITIONREQUEST',
              'BU' : 'MARKETDEFINITION',
              'BV' : 'MARKETDEFINITIONUPDATEREPORT',
              'BW' : 'APPLICATIONMESSAGEREQUEST',
              'BX' : 'APPLICATIONMESSAGEREQUESTACK',
              'BY' : 'APPLICATIONMESSAGEREPORT',
              'BZ' : 'ORDERMASSACTIONREPORT',
              'C' : 'EMAIL',
              'CA' : 'ORDERMASSACTIONREQUEST',
              'CB' : 'USERNOTIFICATION',
              'CC' : 'STREAMASSIGNMENTREQUEST',
              'CD' : 'STREAMASSIGNMENTREPORT',
              'CE' : 'STREAMASSIGNMENTREPORTACK',
              'D' : 'NEWORDERSINGLE',
              'E' : 'NEWORDERLIST',
              'F' : 'ORDERCANCELREQUEST',
              'G' : 'ORDERCANCELREPLACEREQUEST',
              'H' : 'ORDERSTATUSREQUEST',
              'J' : 'ALLOCATIONINSTRUCTION',
              'K' : 'LISTCANCELREQUEST',
              'L' : 'LISTEXECUTE',
              'M' : 'LISTSTATUSREQUEST',
              'N' : 'LISTSTATUS',
              'P' : 'ALLOCATIONINSTRUCTIONACK',
              'Q' : 'DONTKNOWTRADE',
              'R' : 'QUOTEREQUEST',
              'S' : 'QUOTE',
              'T' : 'SETTLEMENTINSTRUCTIONS',
              'V' : 'MARKETDATAREQUEST',
              'W' : 'MARKETDATASNAPSHOTFULLREFRESH',
              'X' : 'MARKETDATAINCREMENTALREFRESH',
              'Y' : 'MARKETDATAREQUESTREJECT',
              'Z' : 'QUOTECANCEL',
              'a' : 'QUOTESTATUSREQUEST',
              'b' : 'MASSQUOTEACKNOWLEDGEMENT',
              'c' : 'SECURITYDEFINITIONREQUEST',
              'd' : 'SECURITYDEFINITION',
              'e' : 'SECURITYSTATUSREQUEST',
              'f' : 'SECURITYSTATUS',
              'g' : 'TRADINGSESSIONSTATUSREQUEST',
              'h' : 'TRADINGSESSIONSTATUS',
              'i' : 'MASSQUOTE',
              'j' : 'BUSINESSMESSAGEREJECT',
              'k' : 'BIDREQUEST',
              'l' : 'BIDRESPONSE',
              'm' : 'LISTSTRIKEPRICE',
              'n' : 'XMLNONFIX',
              'o' : 'REGISTRATIONINSTRUCTIONS',
              'p' : 'REGISTRATIONINSTRUCTIONSRESPONSE',
              'q' : 'ORDERMASSCANCELREQUEST',
              'r' : 'ORDERMASSCANCELREPORT',
              's' : 'NEWORDERCROSS',
              't' : 'CROSSORDERCANCELREPLACEREQUEST',
              'u' : 'CROSSORDERCANCELREQUEST',
              'v' : 'SECURITYTYPEREQUEST',
              'w' : 'SECURITYTYPES',
              'x' : 'SECURITYLISTREQUEST',
              'y' : 'SECURITYLIST',
              'z' : 'DERIVATIVESECURITYLISTREQUEST'
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
              'C' : 'FOREX_MARKET',
              'D' : 'PREVIOUSLY_QUOTED',
              'E' : 'PREVIOUSLY_INDICATED',
              'F' : 'FOREX_LIMIT',
              'G' : 'FOREX_SWAP',
              'H' : 'FOREX_PREVIOUSLY_QUOTED',
              'I' : 'FUNARI',
              'J' : 'MARKET_IF_TOUCHED',
              'K' : 'MARKET_WITH_LEFT_OVER_AS_LIMIT',
              'L' : 'PREVIOUS_FUND_VALUATION_POINT',
              'M' : 'NEXT_FUND_VALUATION_POINT',
              'P' : 'PEGGED',
              'Q' : 'COUNTER_ORDER_SELECTION'
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
              '7' : 'AT_THE_CLOSE',
              '8' : 'GOOD_THROUGH_CROSSING',
              '9' : 'AT_CROSSING'
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
   '63' : { name: 'SettlType', type: 'string',
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
              '9' : 'T_PLUS_5',
              'B' : 'BROKEN_DATE',
              'C' : 'FX_SPOT_NEXT_SETTLEMENT'
            }
          },
   '64' : { name: 'SettlDate', type: 'localmktdate' },
   '65' : { name: 'SymbolSfx', type: 'string',
            enums: {
              'CD' : 'EUCP_WITH_LUMP_SUM_INTEREST_RATHER_THAN_DISCOUNT_PRICE',
              'WI' : 'WHEN_ISSUED_FOR_A_SECURITY_TO_BE_REISSUED_UNDER_AN_OLD_CUSIP_OR_ISIN'
            }
          },
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
              '5' : 'CALCULATED_WITHOUT_PRELIMINARY',
              '6' : 'REVERSAL'
            }
          },
   '72' : { name: 'RefAllocID', type: 'string' },
   '73' : { name: 'NoOrders', type: 'numingroup' },
   '74' : { name: 'AvgPxPrecision', type: 'int' },
   '75' : { name: 'TradeDate', type: 'localmktdate' },
   '77' : { name: 'PositionEffect', type: 'char',
            enums: {
              'C' : 'CLOSE',
              'F' : 'FIFO',
              'O' : 'OPEN',
              'R' : 'ROLLED',
              'N' : 'CLOSE_BUT_NOTIFY_ON_OPEN',
              'D' : 'DEFAULT'
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
              '5' : 'REJECTED_BY_INTERMEDIARY',
              '6' : 'ALLOCATION_PENDING',
              '7' : 'REVERSED'
            }
          },
   '88' : { name: 'AllocRejCode', type: 'int',
            enums: {
              '0' : 'UNKNOWN_ACCOUNT',
              '1' : 'INCORRECT_QUANTITY',
              '2' : 'INCORRECT_AVERAGEG_PRICE',
              '3' : 'UNKNOWN_EXECUTING_BROKER_MNEMONIC',
              '4' : 'COMMISSION_DIFFERENCE',
              '5' : 'UNKNOWN_ORDERID',
              '6' : 'UNKNOWN_LISTID',
              '7' : 'OTHER_7',
              '8' : 'INCORRECT_ALLOCATED_QUANTITY',
              '9' : 'CALCULATION_DIFFERENCE',
              '10' : 'UNKNOWN_OR_STALE_EXECID',
              '11' : 'MISMATCHED_DATA',
              '12' : 'UNKNOWN_CLORDID',
              '13' : 'WAREHOUSE_REQUEST_REJECTED',
              '99' : 'OTHER_99'
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
              '0' : 'NONE',
              '1' : 'PKCS_1',
              '2' : 'DES',
              '3' : 'PKCS_3',
              '4' : 'PGP_4',
              '5' : 'PGP_5',
              '6' : 'PEM'
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
              '7' : 'PRICE_EXCEEDS_CURRENT_PRICE',
              '8' : 'PRICE_EXCEEDS_CURRENT_PRICE_BAND',
              '18' : 'INVALID_PRICE_INCREMENT',
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
              '11' : 'UNSUPPORTED_ORDER_CHARACTERISTIC',
              '12' : 'SURVEILLENCE_OPTION',
              '13' : 'INCORRECT_QUANTITY',
              '14' : 'INCORRECT_ALLOCATED_QUANTITY',
              '15' : 'UNKNOWN_ACCOUNT',
              '16' : 'PRICE_EXCEEDS_CURRENT_PRICE_BAND',
              '18' : 'INVALID_PRICE_INCREMENT',
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
              'N' : 'NO',
              'Y' : 'YES'
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
              '12' : 'AGENT',
              '13' : 'TRANSFER_FEE',
              '14' : 'SECURITY_LENDING'
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
  '146' : { name: 'NoRelatedSym', type: 'numingroup' },
  '147' : { name: 'Subject', type: 'string' },
  '148' : { name: 'Headline', type: 'string' },
  '149' : { name: 'URLLink', type: 'string' },
  '150' : { name: 'ExecType', type: 'char',
            enums: {
              '0' : 'NEW',
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
              'D' : 'RESTATED',
              'E' : 'PENDING_REPLACE',
              'F' : 'TRADE',
              'G' : 'TRADE_CORRECT',
              'H' : 'TRADE_CANCEL',
              'I' : 'ORDER_STATUS',
              'J' : 'TRADE_IN_A_CLEARING_HOLD',
              'K' : 'TRADE_HAS_BEEN_RELEASED_TO_CLEARING',
              'L' : 'TRIGGERED_OR_ACTIVATED_BY_SYSTEM'
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
              '0' : 'DEFAULT',
              '1' : 'STANDING_INSTRUCTIONS_PROVIDED',
              '2' : 'SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING',
              '3' : 'SPECIFIC_ALLOCATION_ACCOUNT_STANDING',
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
              'UST' : 'US_TREASURY_NOTE_UST',
              'USTB' : 'US_TREASURY_BILL_USTB',
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
              'EUFRN' : 'EURO_CORPORATE_FLOATING_RATE_NOTES',
              'FRN' : 'US_CORPORATE_FLOATING_RATE_NOTES',
              'XLINKD' : 'INDEXED_LINKED',
              'STRUCT' : 'STRUCTURED_NOTES',
              'YANK' : 'YANKEE_CORPORATE_BOND',
              'FOR' : 'FOREIGN_EXCHANGE_CONTRACT',
              'CDS' : 'CREDIT_DEFAULT_SWAP',
              'FUT' : 'FUTURE',
              'OPT' : 'OPTION',
              'OOF' : 'OPTIONS_ON_FUTURES',
              'OOP' : 'OPTIONS_ON_PHYSICAL',
              'IRS' : 'INTEREST_RATE_SWAP',
              'OOC' : 'OPTIONS_ON_COMBO',
              'CS' : 'COMMON_STOCK',
              'PS' : 'PREFERRED_STOCK',
              'REPO' : 'REPURCHASE',
              'FORWARD' : 'FORWARD',
              'BUYSELL' : 'BUY_SELLBACK',
              'SECLOAN' : 'SECURITIES_LOAN',
              'SECPLEDGE' : 'SECURITIES_PLEDGE',
              'BRADY' : 'BRADY_BOND',
              'CAN' : 'CANADIAN_TREASURY_NOTES',
              'CTB' : 'CANADIAN_TREASURY_BILLS',
              'EUSOV' : 'EURO_SOVEREIGNS',
              'PROV' : 'CANADIAN_PROVINCIAL_BONDS',
              'TB' : 'TREASURY_BILL',
              'TBOND' : 'US_TREASURY_BOND',
              'TINT' : 'INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE',
              'TBILL' : 'US_TREASURY_BILL_TBILL',
              'TIPS' : 'TREASURY_INFLATION_PROTECTED_SECURITIES',
              'TCAL' : 'PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE',
              'TPRN' : 'PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE',
              'TNOTE' : 'US_TREASURY_NOTE_TNOTE',
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
              'BDN' : 'BANK_DEPOSITORY_NOTE',
              'BN' : 'BANK_NOTES',
              'BOX' : 'BILL_OF_EXCHANGES',
              'CAMM' : 'CANADIAN_MONEY_MARKETS',
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
              'STN' : 'SHORT_TERM_LOAN_NOTE',
              'PZFJ' : 'PLAZOS_FIJOS',
              'SLQN' : 'SECURED_LIQUIDITY_NOTE',
              'TD' : 'TIME_DEPOSIT',
              'TLQN' : 'TERM_LIQUIDITY_NOTE',
              'XCN' : 'EXTENDED_COMM_NOTE',
              'YCD' : 'YANKEE_CERTIFICATE_OF_DEPOSIT',
              'ABS' : 'ASSET_BACKED_SECURITIES',
              'CMB' : 'CANADIAN_MORTGAGE_BONDS',
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
              'AN' : 'OTHER_ANTICIPATION_NOTES',
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
              'TMCP' : 'TAXABLE_MUNICIPAL_CP',
              'TRAN' : 'TAX_REVENUE_ANTICIPATION_NOTE',
              'VRDN' : 'VARIABLE_RATE_DEMAND_NOTE',
              'WAR' : 'WARRANT',
              'MF' : 'MUTUAL_FUND',
              'MLEG' : 'MULTILEG_INSTRUMENT',
              'NONE' : 'NO_SECURITY_TYPE',
              '?' : 'WILDCARD_ENTRY_FOR_USE_ON_SECURITY_DEFINITION_REQUEST',
              'CASH' : 'CASH',
              'FXNDF' : 'NON_DELIVERABLE_FORWARD',
              'FXSPOT' : 'FX_SPOT',
              'FXFWD' : 'FX_FORWARD',
              'FXSWAP' : 'FX_SWAP'
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
              '0' : 'FX_NETTING',
              '1' : 'FX_SWAP'
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
  '221' : { name: 'BenchmarkCurveName', type: 'string',
            enums: {
              'EONIA' : 'EONIA',
              'EUREPO' : 'EUREPO',
              'Euribor' : 'EURIBOR',
              'FutureSWAP' : 'FUTURESWAP',
              'LIBID' : 'LIBID',
              'LIBOR' : 'LIBOR',
              'MuniAAA' : 'MUNIAAA',
              'OTHER' : 'OTHER',
              'Pfandbriefe' : 'PFANDBRIEFE',
              'SONIA' : 'SONIA',
              'SWAP' : 'SWAP',
              'Treasury' : 'TREASURY'
            }
          },
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
              'AMT' : 'ALTERNATIVE_MINIMUM_TAX',
              'AUTOREINV' : 'AUTO_REINVESTMENT_AT_RATE_OR_BETTER',
              'BANKQUAL' : 'BANK_QUALIFIED',
              'BGNCON' : 'BARGAIN_CONDITIONS',
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
              'MINDNOM' : 'MINIMUM_DENOMINATION',
              'MININCR' : 'MINIMUM_INCREMENT',
              'MINQTY' : 'MINIMUM_QUANTITY',
              'PAYFREQ' : 'PAYMENT_FREQUENCY_CALENDAR',
              'PIECES' : 'NUMBER_OF_PIECES',
              'PMAX' : 'POOLS_MAXIMUM',
              'PPL' : 'POOLS_PER_LOT',
              'PPM' : 'POOLS_PER_MILLION',
              'PPT' : 'POOLS_PER_TRADE',
              'PRICE' : 'PRICE_RANGE',
              'PRICEFREQ' : 'PRICING_FREQUENCY',
              'PROD' : 'PRODUCTION_YEAR',
              'PROTECT' : 'CALL_PROTECTION',
              'PURPOSE' : 'PURPOSE',
              'PXSOURCE' : 'BENCHMARK_PRICE_SOURCE',
              'RATING' : 'RATING_SOURCE_AND_RANGE',
              'REDEMPTION' : 'TYPE_OF_REDEMPTION',
              'RESTRICTED' : 'RESTRICTED',
              'SECTOR' : 'MARKET_SECTOR',
              'SECTYPE' : 'SECURITY_TYPE_INCLUDED_OR_EXCLUDED',
              'STRUCT' : 'STRUCTURE',
              'SUBSFREQ' : 'SUBSTITUTIONS_FREQUENCY',
              'SUBSLEFT' : 'SUBSTITUTIONS_LEFT',
              'TEXT' : 'FREEFORM_TEXT',
              'TRDVAR' : 'TRADE_VARIANCE',
              'WAC' : 'WEIGHTED_AVERAGE_COUPON',
              'WAL' : 'WEIGHTED_AVERAGE_LIFE_COUPON',
              'WALA' : 'WEIGHTED_AVERAGE_LOAN_AGE',
              'WAM' : 'WEIGHTED_AVERAGE_MATURITY',
              'WHOLE' : 'WHOLE_POOL',
              'YIELD' : 'YIELD_RANGE',
              'AVFICO' : 'AVERAGE_FICO_SCORE',
              'AVSIZE' : 'AVERAGE_LOAN_SIZE',
              'MAXBAL' : 'MAXIMUM_LOAN_BALANCE',
              'POOL' : 'POOL_IDENTIFIER',
              'ROLLTYPE' : 'TYPE_OF_ROLL_TRADE',
              'REFTRADE' : 'REFERENCE_TO_ROLLING_OR_CLOSING_TRADE',
              'REFPRIN' : 'PRINCIPAL_OF_ROLLING_OR_CLOSING_TRADE',
              'REFINT' : 'INTEREST_OF_ROLLING_OR_CLOSING_TRADE',
              'AVAILQTY' : 'AVAILABLE_OFFER_QUANTITY_TO_BE_SHOWN_TO_THE_STREET',
              'BROKERCREDIT' : 'BROKERS_SALES_CREDIT',
              'INTERNALPX' : 'OFFER_PRICE_TO_BE_SHOWN_TO_INTERNAL_BROKERS',
              'INTERNALQTY' : 'OFFER_QUANTITY_TO_BE_SHOWN_TO_INTERNAL_BROKERS',
              'LEAVEQTY' : 'THE_MINIMUM_RESIDUAL_OFFER_QUANTITY',
              'MAXORDQTY' : 'MAXIMUM_ORDER_SIZE',
              'ORDRINCR' : 'ORDER_QUANTITY_INCREMENT',
              'PRIMARY' : 'PRIMARY_OR_SECONDARY_MARKET_INDICATOR',
              'SALESCREDITOVR' : 'BROKER_SALES_CREDIT_OVERRIDE',
              'TRADERCREDIT' : 'TRADERS_CREDIT',
              'DISCOUNT' : 'DISCOUNT_RATE',
              'YTM' : 'YIELD_TO_MATURITY',
              'ABS' : 'ABSOLUTE_PREPAYMENT_SPEED',
              'CPP' : 'CONSTANT_PREPAYMENT_PENALTY',
              'CPR' : 'CONSTANT_PREPAYMENT_RATE',
              'CPY' : 'CONSTANT_PREPAYMENT_YIELD',
              'HEP' : 'FINAL_CPR_OF_HOME_EQUITY_PREPAYMENT_CURVE',
              'MHP' : 'PERCENT_OF_MANUFACTURED_HOUSING_PREPAYMENT_CURVE',
              'MPR' : 'MONTHLY_PREPAYMENT_RATE',
              'PPC' : 'PERCENT_OF_PROSPECTUS_PREPAYMENT_CURVE',
              'PSA' : 'PERCENT_OF_BMA_PREPAYMENT_CURVE',
              'SMM' : 'SINGLE_MONTHLY_MORTALITY'
            }
          },
  '234' : { name: 'StipulationValue', type: 'string' },
  '235' : { name: 'YieldType', type: 'string',
            enums: {
              'AFTERTAX' : 'AFTER_TAX_YIELD',
              'ANNUAL' : 'ANNUAL_YIELD',
              'ATISSUE' : 'YIELD_AT_ISSUE',
              'AVGMATURITY' : 'YIELD_TO_AVG_MATURITY',
              'BOOK' : 'BOOK_YIELD',
              'CALL' : 'YIELD_TO_NEXT_CALL',
              'CHANGE' : 'YIELD_CHANGE_SINCE_CLOSE',
              'CLOSE' : 'CLOSING_YIELD',
              'COMPOUND' : 'COMPOUND_YIELD',
              'CURRENT' : 'CURRENT_YIELD',
              'GOVTEQUIV' : 'GVNT_EQUIVALENT_YIELD',
              'GROSS' : 'TRUE_GROSS_YIELD',
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
              'PREVCLOSE' : 'PREVIOUS_CLOSE_YIELD',
              'PROCEEDS' : 'PROCEEDS_YIELD',
              'PUT' : 'YIELD_TO_NEXT_PUT',
              'SEMIANNUAL' : 'SEMI_ANNUAL_YIELD',
              'SHORTAVGLIFE' : 'YIELD_TO_SHORTEST_AVERAGE_LIFE',
              'SIMPLE' : 'SIMPLE_YIELD',
              'TAXEQUIV' : 'TAX_EQUIVALENT_YIELD',
              'TENDER' : 'YIELD_TO_TENDER_DATE',
              'TRUE' : 'TRUE_YIELD',
              'VALUE1_32' : 'YIELD_VALUE_OF_1_32',
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
              'N' : 'NO',
              'Y' : 'YES'
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
              'C' : 'OPEN_INTEREST',
              'D' : 'COMPOSITE_UNDERLYING_PRICE',
              'E' : 'SIMULATED_SELL_PRICE',
              'F' : 'SIMULATED_BUY_PRICE',
              'G' : 'MARGIN_RATE',
              'H' : 'MID_PRICE',
              'J' : 'EMPTY_BOOK',
              'K' : 'SETTLE_HIGH_PRICE',
              'L' : 'SETTLE_LOW_PRICE',
              'M' : 'PRIOR_SETTLE_PRICE',
              'N' : 'SESSION_HIGH_BID',
              'O' : 'SESSION_LOW_OFFER',
              'P' : 'EARLY_PRICES',
              'Q' : 'AUCTION_CLEARING_PRICE',
              'S' : 'SWAP_VALUE_FACTOR',
              'R' : 'DAILY_VALUE_ADJUSTMENT_FOR_LONG_POSITIONS',
              'T' : 'CUMULATIVE_VALUE_ADJUSTMENT_FOR_LONG_POSITIONS',
              'U' : 'DAILY_VALUE_ADJUSTMENT_FOR_SHORT_POSITIONS',
              'V' : 'CUMULATIVE_VALUE_ADJUSTMENT_FOR_SHORT_POSITIONS',
              'Y' : 'RECOVERY_RATE',
              'Z' : 'RECOVERY_RATE_FOR_LONG',
              'a' : 'RECOVERY_RATE_FOR_SHORT',
              'W' : 'FIXING_PRICE',
              'X' : 'CASH_RATE'
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
  '276' : { name: 'QuoteCondition', type: 'multiplestringvalue',
            enums: {
              'A' : 'OPEN_ACTIVE',
              'B' : 'CLOSED_INACTIVE',
              'C' : 'EXCHANGE_BEST',
              'D' : 'CONSOLIDATED_BEST',
              'E' : 'LOCKED',
              'F' : 'CROSSED',
              'G' : 'DEPTH',
              'H' : 'FAST_TRADING',
              'I' : 'NON_FIRM',
              'L' : 'MANUAL_SLOW_QUOTE',
              'J' : 'OUTRIGHT_PRICE',
              'K' : 'IMPLIED_PRICE',
              'M' : 'DEPTH_ON_OFFER',
              'N' : 'DEPTH_ON_BID',
              'O' : 'CLOSING',
              'P' : 'NEWS_DISSEMINATION',
              'Q' : 'TRADING_RANGE',
              'R' : 'ORDER_INFLUX',
              'S' : 'DUE_TO_RELATED',
              'T' : 'NEWS_PENDING',
              'U' : 'ADDITIONAL_INFO',
              'V' : 'ADDITIONAL_INFO_DUE_TO_RELATED',
              'W' : 'RESUME',
              'X' : 'VIEW_OF_COMMON',
              'Y' : 'VOLUME_ALERT',
              'Z' : 'ORDER_IMBALANCE',
              'a' : 'EQUIPMENT_CHANGEOVER',
              'b' : 'NO_OPEN',
              'c' : 'REGULAR_ETH',
              'd' : 'AUTOMATIC_EXECUTION',
              'e' : 'AUTOMATIC_EXECUTION_ETH',
              'f ' : 'FAST_MARKET_ETH',
              'g' : 'INACTIVE_ETH',
              'h' : 'ROTATION',
              'i' : 'ROTATION_ETH',
              'j' : 'HALT',
              'k' : 'HALT_ETH',
              'l' : 'DUE_TO_NEWS_DISSEMINATION',
              'm' : 'DUE_TO_NEWS_PENDING',
              'n' : 'TRADING_RESUME',
              'o' : 'OUT_OF_SEQUENCE',
              'p' : 'BID_SPECIALIST',
              'q' : 'OFFER_SPECIALIST',
              'r' : 'BID_OFFER_SPECIALIST',
              's' : 'END_OF_DAY_SAM',
              't' : 'FORBIDDEN_SAM',
              'u' : 'FROZEN_SAM',
              'v' : 'PREOPENING_SAM',
              'w' : 'OPENING_SAM',
              'x' : 'OPEN_SAM',
              'y' : 'SURVEILLANCE_SAM',
              'z' : 'SUSPENDED_SAM',
              '0' : 'RESERVED_SAM',
              '1' : 'NO_ACTIVE_SAM',
              '2' : 'RESTRICTED',
              '3' : 'REST_OF_BOOK_VWAP',
              '4' : 'BETTER_PRICES_IN_CONDITIONAL_ORDERS',
              '5' : 'MEDIAN_PRICE',
              '6' : 'FULL_CURVE',
              '7' : 'FLAT_CURVE'
            }
          },
  '277' : { name: 'TradeCondition', type: 'multiplestringvalue',
            enums: {
              'A' : 'CASH',
              'B' : 'AVERAGE_PRICE_TRADE',
              'C' : 'CASH_TRADE',
              'D' : 'NEXT_DAY',
              'E' : 'OPENING_REOPENING_TRADE_DETAIL',
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
              'R' : 'OPENING_PRICE',
              'S' : 'BARGAIN_CONDITION',
              'T' : 'CONVERTED_PRICE_INDICATOR',
              'U' : 'EXCHANGE_LAST',
              'V' : 'FINAL_PRICE_OF_SESSION',
              'W' : 'EX_PIT',
              'X' : 'CROSSED_X',
              'Y' : 'TRADES_RESULTING_FROM_MANUAL_SLOW_QUOTE',
              'Z' : 'TRADES_RESULTING_FROM_INTERMARKET_SWEEP',
              'a' : 'VOLUME_ONLY',
              'b' : 'DIRECT_PLUS',
              'c' : 'ACQUISITION',
              'd' : 'BUNCHED',
              'e' : 'DISTRIBUTION',
              'f' : 'BUNCHED_SALE',
              'g' : 'SPLIT_TRADE',
              'h' : 'CANCEL_STOPPED',
              'i' : 'CANCEL_ETH',
              'j' : 'CANCEL_STOPPED_ETH',
              'k' : 'OUT_OF_SEQUENCE_ETH',
              'l' : 'CANCEL_LAST_ETH',
              'm' : 'SOLD_LAST_SALE_ETH',
              'n' : 'CANCEL_LAST',
              'o' : 'SOLD_LAST_SALE',
              'p' : 'CANCEL_OPEN',
              'q' : 'CANCEL_OPEN_ETH',
              'r' : 'OPENED_SALE_ETH',
              's' : 'CANCEL_ONLY',
              't' : 'CANCEL_ONLY_ETH',
              'u' : 'LATE_OPEN_ETH',
              'v' : 'AUTO_EXECUTION_ETH',
              'w' : 'REOPEN',
              'x' : 'REOPEN_ETH',
              'y' : 'ADJUSTED',
              'z' : 'ADJUSTED_ETH',
              'AA' : 'SPREAD',
              'AB' : 'SPREAD_ETH',
              'AC' : 'STRADDLE',
              'AD' : 'STRADDLE_ETH',
              'AE' : 'STOPPED',
              'AF' : 'STOPPED_ETH',
              'AG' : 'REGULAR_ETH',
              'AH' : 'COMBO',
              'AI' : 'COMBO_ETH',
              'AJ' : 'OFFICIAL_CLOSING_PRICE',
              'AK' : 'PRIOR_REFERENCE_PRICE',
              '0' : 'CANCEL',
              'AL' : 'STOPPED_SOLD_LAST',
              'AM' : 'STOPPED_OUT_OF_SEQUENCE',
              'AN' : 'OFFICAL_CLOSING_PRICE',
              'AO' : 'CROSSED_AO',
              'AP' : 'FAST_MARKET',
              'AQ' : 'AUTOMATIC_EXECUTION',
              'AR' : 'FORM_T',
              'AS' : 'BASKET_INDEX',
              'AT' : 'BURST_BASKET',
              'AV' : 'OUTSIDE_SPREAD',
              '1' : 'IMPLIED_TRADE',
              '2' : 'MARKETPLACE_ENTERED_TRADE',
              '3' : 'MULT_ASSET_CLASS_MULTILEG_TRADE',
              '4' : 'MULTILEG_TO_MULTILEG_TRADE'
            }
          },
  '278' : { name: 'MDEntryID', type: 'string' },
  '279' : { name: 'MDUpdateAction', type: 'char',
            enums: {
              '0' : 'NEW',
              '1' : 'CHANGE',
              '2' : 'DELETE',
              '3' : 'DELETE_THRU',
              '4' : 'DELETE_FROM',
              '5' : 'OVERLAY'
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
              'C' : 'UNSUPPORTED_MDIMPLICITDELETE',
              'D' : 'INSUFFICIENT_CREDIT'
            }
          },
  '282' : { name: 'MDEntryOriginator', type: 'string' },
  '283' : { name: 'LocationID', type: 'string' },
  '284' : { name: 'DeskID', type: 'string' },
  '285' : { name: 'DeleteReason', type: 'char',
            enums: {
              '0' : 'CANCELLATION',
              '1' : 'ERROR'
            }
          },
  '286' : { name: 'OpenCloseSettlFlag', type: 'multiplecharvalue',
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
  '291' : { name: 'FinancialStatus', type: 'multiplecharvalue',
            enums: {
              '1' : 'BANKRUPT',
              '2' : 'PENDING_DELISTING',
              '3' : 'RESTRICTED'
            }
          },
  '292' : { name: 'CorporateAction', type: 'multiplecharvalue',
            enums: {
              'A' : 'EX_DIVIDEND',
              'B' : 'EX_DISTRIBUTION',
              'C' : 'EX_RIGHTS',
              'D' : 'NEW',
              'E' : 'EX_INTEREST',
              'F' : 'CASH_DIVIDEND',
              'G' : 'STOCK_DIVIDEND',
              'H' : 'NON_INTEGER_STOCK_SPLIT',
              'I' : 'REVERSE_STOCK_SPLIT',
              'J' : 'STANDARD_INTEGER_STOCK_SPLIT',
              'K' : 'POSITION_CONSOLIDATION',
              'L' : 'LIQUIDATION_REORGANIZATION',
              'M' : 'MERGER_REORGANIZATION',
              'N' : 'RIGHTS_OFFERING',
              'O' : 'SHAREHOLDER_MEETING',
              'P' : 'SPINOFF',
              'Q' : 'TENDER_OFFER',
              'R' : 'WARRANT',
              'S' : 'SPECIAL_ACTION',
              'T' : 'SYMBOL_CONVERSION',
              'U' : 'CUSIP',
              'V' : 'LEAP_ROLLOVER',
              'W' : 'SUCCESSION_EVENT'
            }
          },
  '293' : { name: 'DefBidSize', type: 'qty' },
  '294' : { name: 'DefOfferSize', type: 'qty' },
  '295' : { name: 'NoQuoteEntries', type: 'numingroup' },
  '296' : { name: 'NoQuoteSets', type: 'numingroup' },
  '297' : { name: 'QuoteStatus', type: 'int',
            enums: {
              '0' : 'ACCEPTED',
              '1' : 'CANCEL_FOR_SYMBOL',
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
              '15' : 'CANCELED_DUE_TO_CROSS_MARKET',
              '16' : 'ACTIVE',
              '17' : 'CANCELED',
              '18' : 'UNSOLICITED_QUOTE_REPLENISHMENT',
              '19' : 'PENDING_END_TRADE',
              '20' : 'TOO_LATE_TO_END'
            }
          },
  '298' : { name: 'QuoteCancelType', type: 'int',
            enums: {
              '1' : 'CANCEL_FOR_ONE_OR_MORE_SECURITIES',
              '2' : 'CANCEL_FOR_SECURITY_TYPE',
              '3' : 'CANCEL_FOR_UNDERLYING_SECURITY',
              '4' : 'CANCEL_ALL_QUOTES',
              '5' : 'CANCEL_QUOTE_SPECIFIED_IN_QUOTEID',
              '6' : 'CANCEL_BY_QUOTETYPE',
              '7' : 'CANCEL_FOR_SECURITY_ISSUER',
              '8' : 'CANCEL_FOR_ISSUER_OF_UNDERLYING_SECURITY'
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
              '10' : 'PRICE_EXCEEDS_CURRENT_PRICE_BAND',
              '11' : 'QUOTE_LOCKED',
              '99' : 'OTHER',
              '12' : 'INVALID_OR_UNKNOWN_SECURITY_ISSUER',
              '13' : 'INVALID_OR_UNKNOWN_ISSUER_OF_UNDERLYING_SECURITY'
            }
          },
  '301' : { name: 'QuoteResponseLevel', type: 'int',
            enums: {
              '0' : 'NO_ACKNOWLEDGEMENT',
              '1' : 'ACKNOWLEDGE_ONLY_NEGATIVE_OR_ERRONEOUS_QUOTES',
              '2' : 'ACKNOWLEDGE_EACH_QUOTE_MESSAGE',
              '3' : 'SUMMARY_ACKNOWLEDGEMENT'
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
              '3' : 'REQUEST_LIST_SECURITIES',
              '4' : 'SYMBOL',
              '5' : 'SECURITYTYPE_AND_OR_CFICODE',
              '6' : 'PRODUCT',
              '7' : 'TRADINGSESSIONID',
              '8' : 'ALL_SECURITIES',
              '9' : 'MARKETID_OR_MARKETID_PLUS_MARKETSEGMENTID'
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
              '6' : 'CANNOT_MATCH_SELECTION_CRITERIA'
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
              '2' : 'TRADING_HALT',
              '3' : 'RESUME',
              '4' : 'NO_OPEN',
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
              '23' : 'FAST_MARKET',
              '24' : 'PRE_CROSS',
              '25' : 'CROSS',
              '26' : 'POST_CLOSE'
            }
          },
  '327' : { name: 'HaltReasonInt', type: 'int',
            enums: {
              '0' : 'NEWS_DISSEMINATION',
              '1' : 'ORDER_INFLUX',
              '2' : 'ORDER_IMBALANCE',
              '3' : 'ADDITIONAL_INFORMATION',
              '4' : 'NEWS_PENDING',
              '5' : 'EQUIPMENT_CHANGEOVER'
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
  '336' : { name: 'TradingSessionID', type: 'string',
            enums: {
              '1' : 'DAY',
              '2' : 'HALFDAY',
              '3' : 'MORNING',
              '4' : 'AFTERNOON',
              '5' : 'EVENING',
              '6' : 'AFTER_HOURS'
            }
          },
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
  '347' : { name: 'MessageEncoding', type: 'string' },
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
              '18' : 'INVALID_UNSUPPORTED_APPLICATION_VERSION',
              '99' : 'OTHER'
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
              '5' : 'PARTIAL_DECLINE_OF_ORDERQTY',
              '6' : 'CANCEL_ON_TRADING_HALT',
              '7' : 'CANCEL_ON_SYSTEM_FAILURE',
              '8' : 'MARKET',
              '9' : 'CANCELED_NOT_BEST',
              '10' : 'WAREHOUSE_RECAP',
              '11' : 'PEG_REFRESH',
              '99' : 'OTHER'
            }
          },
  '379' : { name: 'BusinessRejectRefID', type: 'string' },
  '380' : { name: 'BusinessRejectReason', type: 'int',
            enums: {
              '0' : 'OTHER',
              '1' : 'UNKNOWN_ID',
              '2' : 'UNKNOWN_SECURITY',
              '3' : 'UNSUPPORTED_MESSAGE_TYPE',
              '4' : 'APPLICATION_NOT_AVAILABLE',
              '5' : 'CONDITIONALLY_REQUIRED_FIELD_MISSING',
              '6' : 'NOT_AUTHORIZED',
              '7' : 'DELIVERTO_FIRM_NOT_AVAILABLE_AT_THIS_TIME',
              '18' : 'INVALID_PRICE_INCREMENT'
            }
          },
  '381' : { name: 'GrossTradeAmt', type: 'amt' },
  '382' : { name: 'NoContraBrokers', type: 'numingroup' },
  '383' : { name: 'MaxMessageSize', type: 'length' },
  '384' : { name: 'NoMsgTypes', type: 'numingroup' },
  '385' : { name: 'MsgDirection', type: 'char',
            enums: {
              'R' : 'RECEIVE',
              'S' : 'SEND'
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
              '6' : 'RELATED_TO_VWAP',
              '7' : 'AVERAGE_PRICE_GUARANTEE'
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
              '2' : 'DISCLOSED_SYTLE',
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
              '1' : 'SIDE_VALUE_1',
              '2' : 'SIDE_VALUE_2'
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
              '1' : '5_DAY_MOVING_AVERAGE',
              '2' : '20_DAY_MOVING_AVERAGE',
              '3' : 'NORMAL_MARKET_SIZE',
              '4' : 'OTHER'
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
              '1' : 'BUY_SIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUE_REQUEST',
              '2' : 'SELL_SIDE_PERIODICALLY_SENDS_STATUS_USING_LIST_STATUS_PERIOD_OPTIONALLY_SPECIFIED_IN_PROGRESSPERIOD',
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
  '420' : { name: 'NoBidComponents', type: 'numingroup' },
  '421' : { name: 'Country', type: 'country' },
  '422' : { name: 'TotNoStrikes', type: 'int' },
  '423' : { name: 'PriceType', type: 'int',
            enums: {
              '1' : 'PERCENTAGE',
              '2' : 'PER_UNIT',
              '3' : 'FIXED_AMOUNT',
              '4' : 'DISCOUNT',
              '5' : 'PREMIUM',
              '6' : 'SPREAD',
              '7' : 'TED_PRICE',
              '8' : 'TED_YIELD',
              '9' : 'YIELD',
              '10' : 'FIXED_CABINET_TRADE_PRICE',
              '11' : 'VARIABLE_CABINET_TRADE_PRICE',
              '13' : 'PRODUCT_TICKS_IN_HALFS',
              '14' : 'PRODUCT_TICKS_IN_FOURTHS',
              '15' : 'PRODUCT_TICKS_IN_EIGHTS',
              '16' : 'PRODUCT_TICKS_IN_SIXTEENTHS',
              '17' : 'PRODUCT_TICKS_IN_THIRTY_SECONDS',
              '18' : 'PRODUCT_TICKS_IN_SIXTY_FORTHS',
              '19' : 'PRODUCT_TICKS_IN_ONE_TWENTY_EIGHTS'
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
              '4' : 'EXEC_STARTED',
              '5' : 'ALL_DONE',
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
              '1' : 'IN_BIDDING_PROCESS',
              '2' : 'RECEIVED_FOR_EXECUTION',
              '3' : 'EXECUTING',
              '4' : 'CANCELLING',
              '5' : 'ALERT',
              '6' : 'ALL_DONE',
              '7' : 'REJECT'
            }
          },
  '432' : { name: 'ExpireDate', type: 'localmktdate' },
  '433' : { name: 'ListExecInstType', type: 'char',
            enums: {
              '1' : 'IMMEDIATE',
              '2' : 'WAIT_FOR_EXECUT_INSTRUCTION',
              '3' : 'EXCHANGE_SWITCH_CIV_ORDER_3',
              '4' : 'EXCHANGE_SWITCH_CIV_ORDER_4',
              '5' : 'EXCHANGE_SWITCH_CIV_ORDER_5'
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
              '6' : 'UK_NATIONAL_INSURANCE_OR_PENSION_NUMBER',
              '7' : 'US_SOCIAL_SECURITY_NUMBER',
              '8' : 'US_EMPLOYER_OR_TAX_ID_NUMBER',
              '9' : 'AUSTRALIAN_BUSINESS_NUMBER',
              'A' : 'AUSTRALIAN_TAX_FILE_NUMBER',
              '1' : 'KOREAN_INVESTOR_ID',
              '2' : 'TAIWANESE_QUALIFIED_FOREIGN_INVESTOR_ID_QFII_FID',
              '3' : 'TAIWANESE_TRADING_ACCT',
              '4' : 'MALAYSIAN_CENTRAL_DEPOSITORY',
              '5' : 'CHINESE_INVESTOR_ID',
              'I' : 'DIRECTED_BROKER_THREE_CHARACTER_ACRONYM_AS_DEFINED_IN_ISITC_ETC_BEST_PRACTICE_GUIDELINES_DOCUMENT',
              'B' : 'BIC',
              'C' : 'GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER',
              'D' : 'PROPRIETARY',
              'E' : 'ISO_COUNTRY_CODE',
              'F' : 'SETTLEMENT_ENTITY_LOCATION',
              'G' : 'MIC',
              'H' : 'CSD_PARTICIPANT_MEMBER_CODE'
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
              '8' : 'LOCATE',
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
              '38' : 'POSITION_ACCOUNT',
              '39' : 'CONTRA_INVESTOR_ID',
              '40' : 'TRANSFER_TO_FIRM',
              '41' : 'CONTRA_POSITION_ACCOUNT',
              '42' : 'CONTRA_EXCHANGE',
              '43' : 'INTERNAL_CARRY_ACCOUNT',
              '44' : 'ORDER_ENTRY_OPERATOR_ID',
              '45' : 'SECONDARY_ACCOUNT_NUMBER',
              '46' : 'FOREIGN_FIRM',
              '47' : 'THIRD_PARTY_ALLOCATION_FIRM',
              '48' : 'CLAIMING_ACCOUNT',
              '49' : 'ASSET_MANAGER',
              '50' : 'PLEDGOR_ACCOUNT',
              '51' : 'PLEDGEE_ACCOUNT',
              '52' : 'LARGE_TRADER_REPORTABLE_ACCOUNT',
              '53' : 'TRADER_MNEMONIC',
              '54' : 'SENDER_LOCATION',
              '55' : 'SESSION_ID',
              '56' : 'ACCEPTABLE_COUNTERPARTY',
              '57' : 'UNACCEPTABLE_COUNTERPARTY',
              '58' : 'ENTERING_UNIT',
              '59' : 'EXECUTING_UNIT',
              '60' : 'INTRODUCING_BROKER',
              '61' : 'QUOTE_ORIGINATOR',
              '62' : 'REPORT_ORIGINATOR',
              '63' : 'SYSTEMATIC_INTERNALISER',
              '64' : 'MULTILATERAL_TRADING_FACILITY',
              '65' : 'REGULATED_MARKET',
              '66' : 'MARKET_MAKER',
              '67' : 'INVESTMENT_FIRM',
              '68' : 'HOST_COMPETENT_AUTHORITY',
              '69' : 'HOME_COMPETENT_AUTHORITY',
              '70' : 'COMPETENT_AUTHORITY_OF_THE_MOST_RELEVANT_MARKET_IN_TERMS_OF_LIQUIDITY',
              '71' : 'COMPETENT_AUTHORITY_OF_THE_TRANSACTION',
              '72' : 'REPORTING_INTERMEDIARY',
              '73' : 'EXECUTION_VENUE',
              '74' : 'MARKET_DATA_ENTRY_ORIGINATOR',
              '75' : 'LOCATION_ID',
              '76' : 'DESK_ID',
              '77' : 'MARKET_DATA_MARKET',
              '78' : 'ALLOCATION_ENTITY',
              '79' : 'PRIME_BROKER_PROVIDING_GENERAL_TRADE_SERVICES',
              '80' : 'STEP_OUT_FIRM',
              '81' : 'BROKERCLEARINGID',
              '82' : 'CENTRAL_REGISTRATION_DEPOSITORY',
              '83' : 'CLEARING_ACCOUNT',
              '84' : 'ACCEPTABLE_SETTLING_COUNTERPARTY',
              '85' : 'UNACCEPTABLE_SETTLING_COUNTERPARTY'
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
              'N' : 'NO',
              'Y' : 'YES'
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
              '7' : 'FED_WIRE',
              '8' : 'DIRECT_CREDIT',
              '9' : 'ACH_CREDIT',
              '10' : 'BPAY',
              '11' : 'HIGH_VALUE_CLEARING_SYSTEM_HVACS',
              '12' : 'REINVEST_IN_FUND'
            }
          },
  '478' : { name: 'CashDistribCurr', type: 'currency' },
  '479' : { name: 'CommCurrency', type: 'currency' },
  '480' : { name: 'CancellationRights', type: 'char',
            enums: {
              'Y' : 'YES',
              'N' : 'NO_N',
              'M' : 'NO_M',
              'O' : 'NO_O'
            }
          },
  '481' : { name: 'MoneyLaunderingStatus', type: 'char',
            enums: {
              'Y' : 'PASSED',
              'N' : 'NOT_CHECKED',
              '1' : 'EXEMPT_1',
              '2' : 'EXEMPT_2',
              '3' : 'EXEMPT_3'
            }
          },
  '482' : { name: 'MailingInst', type: 'string' },
  '483' : { name: 'TransBkdTime', type: 'utctimestamp' },
  '484' : { name: 'ExecPriceType', type: 'char',
            enums: {
              'B' : 'BID_PRICE',
              'C' : 'CREATION_PRICE',
              'D' : 'CREATION_PRICE_PLUS_ADJUSTMENT_PERCENT',
              'E' : 'CREATION_PRICE_PLUS_ADJUSTMENT_AMOUNT',
              'O' : 'OFFER_PRICE',
              'P' : 'OFFER_PRICE_MINUS_ADJUSTMENT_PERCENT',
              'Q' : 'OFFER_PRICE_MINUS_ADJUSTMENT_AMOUNT',
              'S' : 'SINGLE_PRICE'
            }
          },
  '485' : { name: 'ExecPriceAdjustment', type: 'float' },
  '486' : { name: 'DateOfBirth', type: 'localmktdate' },
  '487' : { name: 'TradeReportTransType', type: 'int',
            enums: {
              '0' : 'NEW',
              '1' : 'CANCEL',
              '2' : 'REPLACE',
              '3' : 'RELEASE',
              '4' : 'REVERSE',
              '5' : 'CANCEL_DUE_TO_BACK_OUT_OF_TRADE'
            }
          },
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
              '7' : 'FED_WIRE',
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
              '9' : 'EMPLOYEE_9',
              '10' : 'EMPLOYEE_10',
              '11' : 'EMPLOYER_11',
              '12' : 'EMPLOYER_12',
              '13' : 'NON_FUND_PROTOTYPE_IRA',
              '14' : 'NON_FUND_QUALIFIED_PLAN',
              '15' : 'DEFINED_CONTRIBUTION_PLAN',
              '16' : 'INDIVIDUAL_RETIREMENT_ACCOUNT_16',
              '17' : 'INDIVIDUAL_RETIREMENT_ACCOUNT_17',
              '18' : 'KEOGH',
              '19' : 'PROFIT_SHARING_PLAN',
              '20' : '401',
              '21' : 'SELF_DIRECTED_IRA',
              '22' : '403',
              '23' : '457',
              '24' : 'ROTH_IRA_24',
              '25' : 'ROTH_IRA_25',
              '26' : 'ROTH_CONVERSION_IRA_26',
              '27' : 'ROTH_CONVERSION_IRA_27',
              '28' : 'EDUCATION_IRA_28',
              '29' : 'EDUCATION_IRA_29',
              '999' : 'OTHER'
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
  '502' : { name: 'CashDistribAgentAcctName', type: 'string' },
  '503' : { name: 'CardStartDate', type: 'localmktdate' },
  '504' : { name: 'PaymentDate', type: 'localmktdate' },
  '505' : { name: 'PaymentRemitterID', type: 'string' },
  '506' : { name: 'RegistStatus', type: 'char',
            enums: {
              'A' : 'ACCEPTED',
              'R' : 'REJECTED',
              'H' : 'HELD',
              'N' : 'REMINDER'
            }
          },
  '507' : { name: 'RegistRejReasonCode', type: 'int',
            enums: {
              '1' : 'INVALID_UNACCEPTABLE_ACCOUNT_TYPE',
              '2' : 'INVALID_UNACCEPTABLE_TAX_EXEMPT_TYPE',
              '3' : 'INVALID_UNACCEPTABLE_OWNERSHIP_TYPE',
              '4' : 'INVALID_UNACCEPTABLE_NO_REG_DETAILS',
              '5' : 'INVALID_UNACCEPTABLE_REG_SEQ_NO',
              '6' : 'INVALID_UNACCEPTABLE_REG_DETAILS',
              '7' : 'INVALID_UNACCEPTABLE_MAILING_DETAILS',
              '8' : 'INVALID_UNACCEPTABLE_MAILING_INSTRUCTIONS',
              '9' : 'INVALID_UNACCEPTABLE_INVESTOR_ID',
              '10' : 'INVALID_UNACEEPTABLE_INVESTOR_ID_SOURCE',
              '11' : 'INVALID_UNACCEPTABLE_DATE_OF_BIRTH',
              '12' : 'INVALID_UNACCEPTABLE_INVESTOR_COUNTRY_OF_RESIDENCE',
              '13' : 'INVALID_UNACCEPTABLE_NO_DISTRIB_INSTNS',
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
              '2' : 'CANCEL',
              '1' : 'REPLACE'
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
              '2' : 'COMMISSION_PERCENT',
              '3' : 'INITIAL_CHARGE_AMOUNT',
              '4' : 'INITIAL_CHARGE_PERCENT',
              '5' : 'DISCOUNT_AMOUNT',
              '6' : 'DISCOUNT_PERCENT',
              '7' : 'DILUTION_LEVY_AMOUNT',
              '8' : 'DILUTION_LEVY_PERCENT',
              '9' : 'EXIT_CHARGE_AMOUNT',
              '10' : 'EXIT_CHARGE_PERCENT',
              '11' : 'FUND_BASED_RENEWAL_COMMISSION_PERCENT',
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
  '529' : { name: 'OrderRestrictions', type: 'multiplecharvalue',
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
              'A' : 'RISKLESS_ARBITRAGE',
              'B' : 'ISSUER_HOLDING',
              'C' : 'ISSUE_PRICE_STABILIZATION',
              'D' : 'NON_ALGORITHMIC',
              'E' : 'ALGORITHMIC',
              'F' : 'CROSS'
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
              '7' : 'CANCEL_ALL_ORDERS',
              '8' : 'CANCEL_ORDERS_FOR_A_MARKET',
              '9' : 'CANCEL_ORDERS_FOR_A_MARKET_SEGMENT',
              'A' : 'CANCEL_ORDERS_FOR_A_SECURITY_GROUP',
              'B' : 'CANCEL_FOR_SECURITY_ISSUER',
              'C' : 'CANCEL_FOR_ISSUER_OF_UNDERLYING_SECURITY'
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
              '7' : 'CANCEL_ALL_ORDERS',
              '8' : 'CANCEL_ORDERS_FOR_A_MARKET',
              '9' : 'CANCEL_ORDERS_FOR_A_MARKET_SEGMENT',
              'A' : 'CANCEL_ORDERS_FOR_A_SECURITY_GROUP',
              'B' : 'CANCEL_ORDERS_FOR_A_SECURITIES_ISSUER',
              'C' : 'CANCEL_ORDERS_FOR_ISSUER_OF_UNDERLYING_SECURITY'
            }
          },
  '532' : { name: 'MassCancelRejectReason', type: 'int',
            enums: {
              '0' : 'MASS_CANCEL_NOT_SUPPORTED',
              '1' : 'INVALID_OR_UNKNOWN_SECURITY',
              '2' : 'INVALID_OR_UNKOWN_UNDERLYING_SECURITY',
              '3' : 'INVALID_OR_UNKNOWN_PRODUCT',
              '4' : 'INVALID_OR_UNKNOWN_CFICODE',
              '5' : 'INVALID_OR_UNKNOWN_SECURITYTYPE',
              '6' : 'INVALID_OR_UNKNOWN_TRADING_SESSION',
              '7' : 'INVALID_OR_UNKNOWN_MARKET',
              '8' : 'INVALID_OR_UNKOWN_MARKET_SEGMENT',
              '9' : 'INVALID_OR_UNKNOWN_SECURITY_GROUP',
              '99' : 'OTHER',
              '10' : 'INVALID_OR_UNKNOWN_SECURITY_ISSUER',
              '11' : 'INVALID_OR_UNKNOWN_ISSUER_OF_UNDERLYING_SECURITY'
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
  '546' : { name: 'Scope', type: 'multiplecharvalue',
            enums: {
              '1' : 'LOCAL_MARKET',
              '2' : 'NATIONAL',
              '3' : 'GLOBAL'
            }
          },
  '547' : { name: 'MDImplicitDelete', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '548' : { name: 'CrossID', type: 'string' },
  '549' : { name: 'CrossType', type: 'int',
            enums: {
              '1' : 'CROSS_AON',
              '2' : 'CROSS_IOC',
              '3' : 'CROSS_ONE_SIDE',
              '4' : 'CROSS_SAME_PRICE'
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
              '4' : 'ALL_SECURITIES',
              '5' : 'MARKETID_OR_MARKETID_PLUS_MARKETSEGMENTID'
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
              '1' : 'ONE_PARTY_TRADE_REPORT',
              '2' : 'TWO_PARTY_TRADE_REPORT',
              '3' : 'CONFIRMED_TRADE_REPORT',
              '4' : 'AUTO_MATCH',
              '5' : 'CROSS_AUCTION',
              '6' : 'COUNTER_ORDER_SELECTION',
              '7' : 'CALL_AUCTION',
              '8' : 'ISSUING_BUY_BACK_AUCTION',
              'M3' : 'ACT_ACCEPTED_TRADE',
              'M4' : 'ACT_DEFAULT_TRADE',
              'M5' : 'ACT_DEFAULT_AFTER_M2',
              'M6' : 'ACT_M6_MATCH',
              'A1' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_FOUR_BADGES_AND_EXECUTION_TIME',
              'A2' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_FOUR_BADGES',
              'A3' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_TWO_BADGES_AND_EXECUTION_TIME',
              'A4' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_TWO_BADGES',
              'A5' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADETYPE_AND_SPECIAL_TRADE_INDICATOR_PLUS_EXECUTION_TIME',
              'AQ' : 'COMPARED_RECORDS_RESULTING_FROM_STAMPED_ADVISORIES_OR_SPECIALIST_ACCEPTS_PAIR_OFFS',
              'S1' : 'SUMMARIZED_MATCH_USING_A1_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIED',
              'S2' : 'SUMMARIZED_MATCH_USING_A2_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED',
              'S3' : 'SUMMARIZED_MATCH_USING_A3_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED',
              'S4' : 'SUMMARIZED_MATCH_USING_A4_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED',
              'S5' : 'SUMMARIZED_MATCH_USING_A5_EXACT_MATCH_CRITERIA_EXCEPT_QUANTITY_IS_SUMMARIZED',
              'M1' : 'EXACT_MATCH_ON_TRADE_DATE_STOCK_SYMBOL_QUANTITY_PRICE_TRADE_TYPE_AND_SPECIAL_TRADE_INDICATOR_MINUS_BADGES_AND_TIMES_ACT_M1_MATCH',
              'M2' : 'SUMMARIZED_MATCH_MINUS_BADGES_AND_TIMES_ACT_M2_MATCH',
              'MT' : 'OCS_LOCKED_IN_NON_ACT'
            }
          },
  '575' : { name: 'OddLot', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
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
              '11' : 'QUALIFIED_SERVICE_REPRESENTATIVE_QSR',
              '12' : 'CUSTOMER_TRADE',
              '13' : 'SELF_CLEARING'
            }
          },
  '578' : { name: 'TradeInputSource', type: 'string' },
  '579' : { name: 'TradeInputDevice', type: 'string' },
  '580' : { name: 'NoDates', type: 'numingroup' },
  '581' : { name: 'AccountType', type: 'int',
            enums: {
              '1' : 'ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_THE_BOOKS',
              '2' : 'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS',
              '3' : 'HOUSE_TRADER',
              '4' : 'FLOOR_TRADER',
              '6' : 'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED',
              '7' : 'ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED',
              '8' : 'JOINT_BACK_OFFICE_ACCOUNT'
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
              '8' : 'STATUS_FOR_ORDERS_FOR_A_PARTYID',
              '9' : 'STATUS_FOR_SECURITY_ISSUER',
              '10' : 'STATUS_FOR_ISSUER_OF_UNDERLYING_SECURITY'
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
              '1' : 'DO_NOT_PRO_RATA'
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
  '625' : { name: 'TradingSessionSubID', type: 'string',
            enums: {
              '1' : 'PRE_TRADING',
              '2' : 'OPENING_OR_OPENING_AUCTION',
              '3' : '3',
              '4' : 'CLOSING_OR_CLOSING_AUCTION',
              '5' : 'POST_TRADING',
              '6' : 'INTRADAY_AUCTION',
              '7' : 'QUIESCENT'
            }
          },
  '626' : { name: 'AllocType', type: 'int',
            enums: {
              '1' : 'CALCULATED',
              '2' : 'PRELIMINARY',
              '3' : 'SELLSIDE_CALCULATED_USING_PRELIMINARY',
              '4' : 'SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY',
              '5' : 'READY_TO_BOOK',
              '6' : 'BUYSIDE_READY_TO_BOOK',
              '7' : 'WAREHOUSE_INSTRUCTION',
              '8' : 'REQUEST_TO_INTERMEDIARY',
              '9' : 'ACCEPT',
              '10' : 'REJECT',
              '11' : 'ACCEPT_PENDING',
              '12' : 'INCOMPLETE_GROUP',
              '13' : 'COMPLETE_GROUP',
              '14' : 'REVERSAL_PENDING'
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
              '1' : '1ST_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT',
              '2' : '2ND_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT',
              '3' : '3RD_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT',
              '4' : '4TH_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT',
              '5' : '5TH_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT',
              '9' : '6TH_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT',
              'B' : 'CBOE_MEMBER',
              'C' : 'NON_MEMBER_AND_CUSTOMER',
              'E' : 'EQUITY_MEMBER_AND_CLEARING_MEMBER',
              'F' : 'FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS',
              'H' : '106H_AND_106J_FIRMS',
              'I' : 'GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS',
              'L' : 'LESSEE_106F_EMPLOYEES',
              'M' : 'ALL_OTHER_OWNERSHIP_TYPES'
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
              'N' : 'NO',
              'Y' : 'YES'
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
              '11' : 'INSUFFICIENT_CREDIT',
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
              '1' : 'BOOK_ENTRY',
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
  '685' : { name: 'LegOrderQty', type: 'qty' },
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
              '4' : 'DISCOUNT',
              '5' : 'PREMIUM',
              '6' : 'SPREAD',
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
              '6' : 'PASS',
              '7' : 'END_TRADE',
              '8' : 'TIMED_OUT'
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
              'ALC' : 'ALLOCATION_TRADE_QTY',
              'AS' : 'OPTION_ASSIGNMENT',
              'ASF' : 'AS_OF_TRADE_QTY',
              'DLV' : 'DELIVERY_QTY',
              'ETR' : 'ELECTRONIC_TRADE_QTY',
              'EX' : 'OPTION_EXERCISE_QTY',
              'FIN' : 'END_OF_DAY_QTY',
              'IAS' : 'INTRA_SPREAD_QTY',
              'IES' : 'INTER_SPREAD_QTY',
              'PA' : 'ADJUSTMENT_QTY',
              'PIT' : 'PIT_TRADE_QTY',
              'SOD' : 'START_OF_DAY_QTY',
              'SPL' : 'INTEGRAL_SPLIT',
              'TA' : 'TRANSACTION_FROM_ASSIGNMENT',
              'TOT' : 'TOTAL_TRANSACTION_QTY',
              'TQ' : 'TRANSACTION_QUANTITY',
              'TRF' : 'TRANSFER_TRADE_QTY',
              'TX' : 'TRANSACTION_FROM_EXERCISE',
              'XM' : 'CROSS_MARGIN_QTY',
              'RCV' : 'RECEIVE_QUANTITY',
              'CAA' : 'CORPORATE_ACTION_ADJUSTMENT',
              'DN' : 'DELIVERY_NOTICE_QTY',
              'EP' : 'EXCHANGE_FOR_PHYSICAL_QTY',
              'PNTN' : 'PRIVATELY_NEGOTIATED_TRADE_QTY',
              'DLT' : 'NET_DELTA_QTY',
              'CEA' : 'CREDIT_EVENT_ADJUSTMENT',
              'SEA' : 'SUCCESSION_EVENT_ADJUSTMENT'
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
              'CASH' : 'CASH_AMOUNT',
              'CRES' : 'CASH_RESIDUAL_AMOUNT',
              'FMTM' : 'FINAL_MARK_TO_MARKET_AMOUNT',
              'IMTM' : 'INCREMENTAL_MARK_TO_MARKET_AMOUNT',
              'PREM' : 'PREMIUM_AMOUNT',
              'SMTM' : 'START_OF_DAY_MARK_TO_MARKET_AMOUNT',
              'TVAR' : 'TRADE_VARIATION_AMOUNT',
              'VADJ' : 'VALUE_ADJUSTED_AMOUNT',
              'SETL' : 'SETTLEMENT_VALUE',
              'ICPN' : 'INITIAL_TRADE_COUPON_AMOUNT',
              'ACPN' : 'ACCRUED_COUPON_AMOUNT',
              'CPN' : 'COUPON_AMOUNT',
              'IACPN' : 'INCREMENTAL_ACCRUED_COUPON',
              'CMTM' : 'COLLATERALIZED_MARK_TO_MARKET',
              'ICMTM' : 'INCREMENTAL_COLLATERALIZED_MARK_TO_MARKET',
              'DLV' : 'COMPENSATION_AMOUNT',
              'BANK' : 'TOTAL_BANKED_AMOUNT',
              'COLAT' : 'TOTAL_COLLATERALIZED_AMOUNT'
            }
          },
  '708' : { name: 'PosAmt', type: 'amt' },
  '709' : { name: 'PosTransType', type: 'int',
            enums: {
              '1' : 'EXERCISE',
              '2' : 'DO_NOT_EXERCISE',
              '3' : 'POSITION_ADJUSTMENT',
              '4' : 'POSITION_CHANGE_SUBMISSION_MARGIN_DISPOSITION',
              '5' : 'PLEDGE',
              '6' : 'LARGE_TRADER_SUBMISSION'
            }
          },
  '710' : { name: 'PosReqID', type: 'string' },
  '711' : { name: 'NoUnderlyings', type: 'numingroup' },
  '712' : { name: 'PosMaintAction', type: 'int',
            enums: {
              '1' : 'NEW',
              '2' : 'REPLACE',
              '3' : 'CANCEL',
              '4' : 'REVERSE'
            }
          },
  '713' : { name: 'OrigPosReqRefID', type: 'string' },
  '714' : { name: 'PosMaintRptRefID', type: 'string' },
  '715' : { name: 'ClearingBusinessDate', type: 'localmktdate' },
  '716' : { name: 'SettlSessID', type: 'string',
            enums: {
              'ITD' : 'INTRADAY',
              'RTH' : 'REGULAR_TRADING_HOURS',
              'ETH' : 'ELECTRONIC_TRADING_HOURS',
              'EOD' : 'END_OF_DAY'
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
              '3' : 'ASSIGNMENTS',
              '4' : 'SETTLEMENT_ACTIVITY',
              '5' : 'BACKOUT_MESSAGE',
              '6' : 'DELTA_POSITIONS'
            }
          },
  '725' : { name: 'ResponseTransportType', type: 'int',
            enums: {
              '0' : 'INBAND',
              '1' : 'OUT_OF_BAND'
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
              'P' : 'PRO_RATA',
              'R' : 'RANDOM'
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
              '9' : 'NOT_AUTHORIZED',
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
              '1' : 'INVALID_PARTY_ONFORMATION',
              '2' : 'UNKNOWN_INSTRUMENT',
              '3' : 'UNAUTHORIZED_TO_REPORT_TRADES',
              '4' : 'INVALID_TRADE_TYPE',
              '99' : 'OTHER'
            }
          },
  '752' : { name: 'SideMultiLegReportingType', type: 'int',
            enums: {
              '1' : 'SINGLE_SECURITY',
              '2' : 'INDIVIDUAL_LEG_OF_A_MULTILEG_SECURITY',
              '3' : 'MULTILEG_SECURITY'
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
              '5' : 'BROKER_EXECUTION',
              '6' : 'DESK_RECEIPT',
              '7' : 'SUBMISSION_TO_CLEARING'
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
              'C' : 'CASH',
              'S' : 'SECURITIES'
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
              '2' : 'PRELIMINARY_REQUEST_TO_INTERMEDIARY',
              '3' : 'SELLSIDE_CALCULATED_USING_PRELIMINARY',
              '4' : 'SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY',
              '5' : 'WAREHOUSE_RECAP',
              '8' : 'REQUEST_TO_INTERMEDIARY',
              '9' : 'ACCEPT',
              '10' : 'REJECT',
              '11' : 'ACCEPT_PENDING',
              '12' : 'COMPLETE',
              '14' : 'REVERSE_PENDING'
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
              '1' : 'ACCOUNT_IS_CARRIED_PN_CUSTOMER_SIDE_OF_BOOKS',
              '2' : 'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS',
              '3' : 'HOUSE_TRADER',
              '4' : 'FLOOR_TRADER',
              '6' : 'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED',
              '7' : 'ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED',
              '8' : 'JOINT_BACK_OFFICE_ACCOUNT'
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
              '25' : 'LOCATION_DESK',
              '26' : 'POSITION_ACCOUNT_TYPE',
              '27' : 'SECURITY_LOCATE_ID',
              '28' : 'MARKET_MAKER',
              '29' : 'ELIGIBLE_COUNTERPARTY',
              '30' : 'PROFESSIONAL_CLIENT',
              '31' : 'LOCATION',
              '32' : 'EXECUTION_VENUE',
              '33' : 'CURRENCY_DELIVERY_IDENTIFIER'
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
  '809' : { name: 'NoUsernames', type: 'numingroup' },
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
              '2' : 'LAST_TRADE_IS_THE_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID'
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
              '2' : 'USE_ALLOCATION_PROVIDED_WITH_THE_TRADE',
              '3' : 'ALLOCATION_GIVE_UP_EXECUTOR',
              '4' : 'ALLOCATION_FROM_EXECUTOR',
              '5' : 'ALLOCATION_TO_CLAIM_ACCOUNT'
            }
          },
  '827' : { name: 'ExpirationCycle', type: 'int',
            enums: {
              '0' : 'EXPIRE_ON_TRADING_SESSION_CLOSE',
              '1' : 'EXPIRE_ON_TRADING_SESSION_OPEN',
              '2' : 'TRADING_ELIGIBILITY_EXPIRATION_SPECIFIED_IN_THE_DATE_AND_TIME_FIELDS_EVENTDATE'
            }
          },
  '828' : { name: 'TrdType', type: 'int',
            enums: {
              '0' : 'REGULAR_TRADE',
              '1' : 'BLOCK_TRADE_1',
              '2' : 'EFP',
              '3' : 'TRANSFER',
              '4' : 'LATE_TRADE',
              '5' : 'T_TRADE',
              '6' : 'WEIGHTED_AVERAGE_PRICE_TRADE',
              '7' : 'BUNCHED_TRADE',
              '8' : 'LATE_BUNCHED_TRADE',
              '9' : 'PRIOR_REFERENCE_PRICE_TRADE',
              '10' : 'AFTER_HOURS_TRADE',
              '11' : 'EXCHANGE_FOR_RISK',
              '12' : 'EXCHANGE_FOR_SWAP',
              '13' : 'EXCHANGE_OF_FUTURES_FOR',
              '14' : 'EXCHANGE_OF_OPTIONS_FOR_OPTIONS',
              '15' : 'TRADING_AT_SETTLEMENT',
              '16' : 'ALL_OR_NONE',
              '17' : 'FUTURES_LARGE_ORDER_EXECUTION',
              '18' : 'EXCHANGE_OF_FUTURES_FOR_FUTURES',
              '19' : 'OPTION_INTERIM_TRADE',
              '20' : 'OPTION_CABINET_TRADE',
              '22' : 'PRIVATELY_NEGOTIATED_TRADES',
              '23' : 'SUBSTITUTION_OF_FUTURES_FOR_FORWARDS',
              '48' : 'NON_STANDARD_SETTLEMENT',
              '49' : 'DERIVATIVE_RELATED_TRANSACTION',
              '50' : 'PORTFOLIO_TRADE',
              '51' : 'VOLUME_WEIGHTED_AVERAGE_TRADE',
              '52' : 'EXCHANGE_GRANTED_TRADE',
              '53' : 'REPURCHASE_AGREEMENT',
              '54' : 'OTC',
              '55' : 'EXCHANGE_BASIS_FACILITY',
              '24' : 'ERROR_TRADE',
              '25' : 'SPECIAL_CUM_DIVIDEND',
              '26' : 'SPECIAL_EX_DIVIDEND',
              '27' : 'SPECIAL_CUM_COUPON',
              '28' : 'SPECIAL_EX_COUPON',
              '29' : 'CASH_SETTLEMENT',
              '30' : 'SPECIAL_PRICE',
              '31' : 'GUARANTEED_DELIVERY',
              '32' : 'SPECIAL_CUM_RIGHTS',
              '33' : 'SPECIAL_EX_RIGHTS',
              '34' : 'SPECIAL_CUM_CAPITAL_REPAYMENTS',
              '35' : 'SPECIAL_EX_CAPITAL_REPAYMENTS',
              '36' : 'SPECIAL_CUM_BONUS',
              '37' : 'SPECIAL_EX_BONUS',
              '38' : 'BLOCK_TRADE_38',
              '39' : 'WORKED_PRINCIPAL_TRADE',
              '40' : 'BLOCK_TRADES',
              '41' : 'NAME_CHANGE',
              '42' : 'PORTFOLIO_TRANSFER',
              '43' : 'PROROGATION_BUY',
              '44' : 'PROROGATION_SELL',
              '45' : 'OPTION_EXERCISE',
              '46' : 'DELTA_NEUTRAL_TRANSACTION',
              '47' : 'FINANCING_TRANSACTION'
            }
          },
  '829' : { name: 'TrdSubType', type: 'int',
            enums: {
              '0' : 'CMTA',
              '1' : 'INTERNAL_TRANSFER_OR_ADJUSTMENT',
              '2' : 'EXTERNAL_TRANSFER_OR_TRANSFER_OF_ACCOUNT',
              '3' : 'REJECT_FOR_SUBMITTING_SIDE',
              '4' : 'ADVISORY_FOR_CONTRA_SIDE',
              '5' : 'OFFSET_DUE_TO_AN_ALLOCATION',
              '6' : 'ONSET_DUE_TO_AN_ALLOCATION',
              '7' : 'DIFFERENTIAL_SPREAD',
              '8' : 'IMPLIED_SPREAD_LEG_EXECUTED_AGAINST_AN_OUTRIGHT',
              '9' : 'TRANSACTION_FROM_EXERCISE',
              '10' : 'TRANSACTION_FROM_ASSIGNMENT',
              '11' : 'ACATS',
              '33' : 'OFF_HOURS_TRADE',
              '34' : 'ON_HOURS_TRADE',
              '35' : 'OTC_QUOTE',
              '36' : 'CONVERTED_SWAP',
              '14' : 'AI',
              '15' : 'B',
              '16' : 'K',
              '17' : 'LC',
              '18' : 'M',
              '19' : 'N',
              '20' : 'NM',
              '21' : 'NR',
              '22' : 'P',
              '23' : 'PA',
              '24' : 'PC',
              '25' : 'PN',
              '26' : 'R',
              '27' : 'RO',
              '28' : 'RT',
              '29' : 'SW',
              '30' : 'T',
              '31' : 'WN',
              '32' : 'WT',
              '37' : 'CROSSED_TRADE',
              '38' : 'INTERIM_PROTECTED_TRADE',
              '39' : 'LARGE_IN_SCALE'
            }
          },
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
              '1' : 'STRICT',
              '2' : 'OR_WORSE'
            }
          },
  '838' : { name: 'PegRoundDirection', type: 'int',
            enums: {
              '1' : 'MORE_AGGRESSIVE',
              '2' : 'MORE_PASSIVE'
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
              '1' : 'STRICT',
              '2' : 'OR_WORSE'
            }
          },
  '844' : { name: 'DiscretionRoundDirection', type: 'int',
            enums: {
              '1' : 'MORE_AGGRESSIVE',
              '2' : 'MORE_PASSIVE'
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
              '3' : 'LIQUIDITY_ROUTED_OUT',
              '4' : 'AUCTION'
            }
          },
  '852' : { name: 'PublishTrdIndicator', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
  '853' : { name: 'ShortSaleReason', type: 'int',
            enums: {
              '0' : 'DEALER_SOLD_SHORT',
              '1' : 'DEALER_SOLD_SHORT_EXEMPT',
              '2' : 'SELLING_CUSTOMER_SOLD_SHORT',
              '3' : 'SELLING_CUSTOMER_SOLD_SHORT_EXEMPT',
              '4' : 'QUALIFIED_SERVICE_REPRESENTATIVE',
              '5' : 'QSR_OR_AGU_CONTRA_SIDE_SOLD_SHORT_EXEMPT'
            }
          },
  '854' : { name: 'QtyType', type: 'int',
            enums: {
              '0' : 'UNITS',
              '1' : 'CONTRACTS',
              '2' : 'UNITS_OF_MEASURE_PER_TIME_UNIT'
            }
          },
  '855' : { name: 'SecondaryTrdType', type: 'int' },
  '856' : { name: 'TradeReportType', type: 'int',
            enums: {
              '0' : 'SUBMIT',
              '1' : 'ALLEGED_1',
              '2' : 'ACCEPT',
              '3' : 'DECLINE',
              '4' : 'ADDENDUM',
              '5' : 'NO_WAS',
              '6' : 'TRADE_REPORT_CANCEL',
              '7' : '7',
              '8' : 'DEFAULTED',
              '9' : 'INVALID_CMTA',
              '10' : 'PENDED',
              '11' : 'ALLEGED_NEW',
              '12' : 'ALLEGED_ADDENDUM',
              '13' : 'ALLEGED_NO_WAS',
              '14' : 'ALLEGED_TRADE_REPORT_CANCEL',
              '15' : 'ALLEGED_15'
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
              '5' : 'ACTIVATION',
              '6' : 'INACTIVIATION',
              '7' : 'LAST_ELIGIBLE_TRADE_DATE',
              '8' : 'SWAP_START_DATE',
              '9' : 'SWAP_END_DATE',
              '10' : 'SWAP_ROLL_DATE',
              '11' : 'SWAP_NEXT_START_DATE',
              '12' : 'SWAP_NEXT_ROLL_DATE',
              '13' : 'FIRST_DELIVERY_DATE',
              '14' : 'LAST_DELIVERY_DATE',
              '15' : 'INITIAL_INVENTORY_DUE_DATE',
              '16' : 'FINAL_INVENTORY_DUE_DATE',
              '17' : 'FIRST_INTENT_DATE',
              '18' : 'LAST_INTENT_DATE',
              '19' : 'POSITION_REMOVAL_DATE',
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
              '13' : 'ESCROWED_TO_REDEMPTION_DATE',
              '14' : 'PRE_REFUNDED',
              '15' : 'IN_DEFAULT',
              '16' : 'UNRATED',
              '17' : 'TAXABLE',
              '18' : 'INDEXED',
              '19' : 'SUBJECT_TO_ALTERNATIVE_MINIMUM_TAX',
              '20' : 'ORIGINAL_ISSUE_DISCOUNT_PRICE_SUPPLY_PRICE_IN_THE_INSTRATTRIBVALUE',
              '21' : 'CALLABLE_BELOW_MATURITY_VALUE',
              '22' : 'CALLABLE_WITHOUT_NOTICE_BY_MAIL_TO_HOLDER_UNLESS_REGISTERED',
              '23' : 'PRICE_TICK_RULES_FOR_SECURITY',
              '24' : 'TRADE_TYPE_ELIGIBILITY_DETAILS_FOR_SECURITY',
              '25' : 'INSTRUMENT_DENOMINATOR',
              '26' : 'INSTRUMENT_NUMERATOR',
              '27' : 'INSTRUMENT_PRICE_PRECISION',
              '28' : 'INSTRUMENT_STRIKE_PRICE',
              '29' : 'TRADEABLE_INDICATOR',
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
              'N' : 'NO',
              'Y' : 'YES'
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
              '0' : 'TRADE_DATE',
              '1' : 'GC_INSTRUMENT',
              '2' : 'COLLATERAL_INSTRUMENT',
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
  '912' : { name: 'LastRptRequested', type: 'boolean',
            enums: {
              'N' : 'NO',
              'Y' : 'YES'
            }
          },
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
              '1' : 'LOG_ON_USER',
              '2' : 'LOG_OFF_USER',
              '3' : 'CHANGE_PASSWORD_FOR_USER',
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
              '6' : 'OTHER',
              '7' : 'FORCED_USER_LOGOUT_BY_EXCHANGE',
              '8' : 'SESSION_SHUTDOWN_WARNING'
            }
          },
  '927' : { name: 'UserStatusText', type: 'string' },
  '928' : { name: 'StatusValue', type: 'int',
            enums: {
              '1' : 'CONNECTED',
              '2' : 'NOT_CONNECTED_2',
              '3' : 'NOT_CONNECTED_3',
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
              '1' : 'REJECTED',
              '3' : 'ACCEPTED_WITH_ERRORS'
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
  '957' : { name: 'NoStrategyParameters', type: 'numingroup' },
  '958' : { name: 'StrategyParameterName', type: 'string' },
  '959' : { name: 'StrategyParameterType', type: 'int',
            enums: {
              '1' : 'INT',
              '2' : 'LENGTH',
              '3' : 'NUMINGROUP',
              '4' : 'SEQNUM',
              '5' : 'TAGNUM',
              '6' : 'FLOAT',
              '7' : 'QTY',
              '8' : 'PRICE',
              '9' : 'PRICEOFFSET',
              '10' : 'AMT',
              '11' : 'PERCENTAGE',
              '12' : 'CHAR',
              '13' : 'BOOLEAN',
              '14' : 'STRING',
              '15' : 'MULTIPLECHARVALUE',
              '16' : 'CURRENCY',
              '17' : 'EXCHANGE',
              '18' : 'MONTHYEAR',
              '19' : 'UTCTIMESTAMP',
              '20' : 'UTCTIMEONLY',
              '21' : 'LOCALMKTDATE',
              '22' : 'UTCDATEONLY',
              '23' : 'DATA',
              '24' : 'MULTIPLESTRINGVALUE',
              '25' : 'COUNTRY',
              '26' : 'LANGUAGE',
              '27' : 'TZTIMEONLY',
              '28' : 'TZTIMESTAMP',
              '29' : 'TENOR'
            }
          },
  '960' : { name: 'StrategyParameterValue', type: 'string' },
  '961' : { name: 'HostCrossID', type: 'string' },
  '962' : { name: 'SideTimeInForce', type: 'utctimestamp' },
  '963' : { name: 'MDReportID', type: 'int' },
  '964' : { name: 'SecurityReportID', type: 'int' },
  '965' : { name: 'SecurityStatus', type: 'string',
            enums: {
              '1' : 'ACTIVE',
              '2' : 'INACTIVE'
            }
          },
  '966' : { name: 'SettleOnOpenFlag', type: 'string' },
  '967' : { name: 'StrikeMultiplier', type: 'float' },
  '968' : { name: 'StrikeValue', type: 'float' },
  '969' : { name: 'MinPriceIncrement', type: 'float' },
  '970' : { name: 'PositionLimit', type: 'int' },
  '971' : { name: 'NTPositionLimit', type: 'int' },
  '972' : { name: 'UnderlyingAllocationPercent', type: 'percentage' },
  '973' : { name: 'UnderlyingCashAmount', type: 'amt' },
  '974' : { name: 'UnderlyingCashType', type: 'string',
            enums: {
              'FIXED' : 'FIXED',
              'DIFF' : 'DIFF'
            }
          },
  '975' : { name: 'UnderlyingSettlementType', type: 'int',
            enums: {
              '2' : 'T_PLUS_1',
              '4' : 'T_PLUS_3',
              '5' : 'T_PLUS_4'
            }
          },
  '976' : { name: 'QuantityDate', type: 'localmktdate' },
  '977' : { name: 'ContIntRptID', type: 'string' },
  '978' : { name: 'LateIndicator', type: 'boolean' },
  '979' : { name: 'InputSource', type: 'string' },
  '980' : { name: 'SecurityUpdateAction', type: 'char',
            enums: {
              'A' : 'ADD',
              'D' : 'DELETE',
              'M' : 'MODIFY'
            }
          },
  '981' : { name: 'NoExpiration', type: 'numingroup' },
  '982' : { name: 'ExpirationQtyType', type: 'int',
            enums: {
              '1' : 'AUTO_EXERCISE',
              '2' : 'NON_AUTO_EXERCISE',
              '3' : 'FINAL_WILL_BE_EXERCISED',
              '4' : 'CONTRARY_INTENTION',
              '5' : 'DIFFERENCE'
            }
          },
  '983' : { name: 'ExpQty', type: 'qty' },
  '984' : { name: 'NoUnderlyingAmounts', type: 'numingroup' },
  '985' : { name: 'UnderlyingPayAmount', type: 'amt' },
  '986' : { name: 'UnderlyingCollectAmount', type: 'amt' },
  '987' : { name: 'UnderlyingSettlementDate', type: 'localmktdate' },
  '988' : { name: 'UnderlyingSettlementStatus', type: 'string' },
  '989' : { name: 'SecondaryIndividualAllocID', type: 'string' },
  '990' : { name: 'LegReportID', type: 'string' },
  '991' : { name: 'RndPx', type: 'price' },
  '992' : { name: 'IndividualAllocType', type: 'int',
            enums: {
              '1' : 'SUB_ALLOCATE',
              '2' : 'THIRD_PARTY_ALLOCATION'
            }
          },
  '993' : { name: 'AllocCustomerCapacity', type: 'string' },
  '994' : { name: 'TierCode', type: 'string' },
  '996' : { name: 'UnitOfMeasure', type: 'string',
            enums: {
              'Bcf' : 'BILLION_CUBIC_FEET',
              'MMbbl' : 'MILLION_BARRELS',
              'MMBtu' : 'ONE_MILLION_BTU',
              'MWh' : 'MEGAWATT_HOURS',
              'Bbl' : 'BARRELS',
              'Bu' : 'BUSHELS',
              'lbs' : 'POUNDS',
              'Gal' : 'GALLONS',
              'oz_tr' : 'TROY_OUNCES',
              't' : 'METRIC_TONS',
              'tn' : 'TONS',
              'USD' : 'US_DOLLARS',
              'Alw' : 'ALLOWANCES'
            }
          },
  '997' : { name: 'TimeUnit', type: 'string',
            enums: {
              'H' : 'HOUR',
              'Min' : 'MINUTE',
              'S' : 'SECOND',
              'D' : 'DAY',
              'Wk' : 'WEEK',
              'Mo' : 'MONTH',
              'Yr' : 'YEAR'
            }
          },
  '998' : { name: 'UnderlyingUnitOfMeasure', type: 'string' },
  '999' : { name: 'LegUnitOfMeasure', type: 'string' },
 '1000' : { name: 'UnderlyingTimeUnit', type: 'string' },
 '1001' : { name: 'LegTimeUnit', type: 'string' },
 '1002' : { name: 'AllocMethod', type: 'int',
            enums: {
              '1' : 'AUTOMATIC',
              '2' : 'GUARANTOR',
              '3' : 'MANUAL'
            }
          },
 '1003' : { name: 'TradeID', type: 'string' },
 '1005' : { name: 'SideTradeReportID', type: 'string' },
 '1006' : { name: 'SideFillStationCd', type: 'string' },
 '1007' : { name: 'SideReasonCd', type: 'string' },
 '1008' : { name: 'SideTrdSubTyp', type: 'int' },
 '1009' : { name: 'SideLastQty', type: 'int' },
 '1011' : { name: 'MessageEventSource', type: 'string' },
 '1012' : { name: 'SideTrdRegTimestamp', type: 'utctimestamp' },
 '1013' : { name: 'SideTrdRegTimestampType', type: 'int' },
 '1014' : { name: 'SideTrdRegTimestampSrc', type: 'string' },
 '1015' : { name: 'AsOfIndicator', type: 'char',
            enums: {
              '0' : 'FALSE',
              '1' : 'TRUE'
            }
          },
 '1016' : { name: 'NoSideTrdRegTS', type: 'numingroup' },
 '1017' : { name: 'LegOptionRatio', type: 'float' },
 '1018' : { name: 'NoInstrumentParties', type: 'numingroup' },
 '1019' : { name: 'InstrumentPartyID', type: 'string' },
 '1020' : { name: 'TradeVolume', type: 'qty' },
 '1021' : { name: 'MDBookType', type: 'int',
            enums: {
              '1' : 'TOP_OF_BOOK',
              '2' : 'PRICE_DEPTH',
              '3' : 'ORDER_DEPTH'
            }
          },
 '1022' : { name: 'MDFeedType', type: 'string' },
 '1023' : { name: 'MDPriceLevel', type: 'int' },
 '1024' : { name: 'MDOriginType', type: 'int',
            enums: {
              '0' : 'BOOK',
              '1' : 'OFF_BOOK',
              '2' : 'CROSS'
            }
          },
 '1025' : { name: 'FirstPx', type: 'price' },
 '1026' : { name: 'MDEntrySpotRate', type: 'float' },
 '1027' : { name: 'MDEntryForwardPoints', type: 'priceoffset' },
 '1028' : { name: 'ManualOrderIndicator', type: 'boolean' },
 '1029' : { name: 'CustDirectedOrder', type: 'boolean' },
 '1030' : { name: 'ReceivedDeptID', type: 'string' },
 '1031' : { name: 'CustOrderHandlingInst', type: 'multiplestringvalue',
            enums: {
              'ADD' : 'ADD_ON_ORDER',
              'AON' : 'ALL_OR_NONE',
              'CNH' : 'CASH_NOT_HELD',
              'DIR' : 'DIRECTED_ORDER',
              'E.W' : 'EXCHANGE_FOR_PHYSICAL_TRANSACTION',
              'FOK' : 'FILL_OR_KILL',
              'IO' : 'IMBALANCE_ONLY',
              'IOC' : 'IMMEDIATE_OR_CANCEL',
              'LOO' : 'LIMIT_ON_OPEN',
              'LOC' : 'LIMIT_ON_CLOSE',
              'MAO' : 'MARKET_AT_OPEN',
              'MAC' : 'MARKET_AT_CLOSE',
              'MOO' : 'MARKET_ON_OPEN',
              'MOC' : 'MARKET_ON_CLOSE',
              'MQT' : 'MINIMUM_QUANTITY',
              'NH' : 'NOT_HELD',
              'OVD' : 'OVER_THE_DAY',
              'PEG' : 'PEGGED',
              'RSV' : 'RESERVE_SIZE_ORDER',
              'S.W' : 'STOP_STOCK_TRANSACTION',
              'SCL' : 'SCALE',
              'TMO' : 'TIME_ORDER',
              'TS' : 'TRAILING_STOP',
              'WRK' : 'WORK'
            }
          },
 '1032' : { name: 'OrderHandlingInstSource', type: 'int',
            enums: {
              '1' : 'NASD_OATS'
            }
          },
 '1033' : { name: 'DeskType', type: 'string',
            enums: {
              'A' : 'AGENCY',
              'AR' : 'ARBITRAGE',
              'D' : 'DERIVATIVES',
              'IN' : 'INTERNATIONAL',
              'IS' : 'INSTITUTIONAL',
              'O' : 'OTHER',
              'PF' : 'PREFERRED_TRADING',
              'PR' : 'PROPRIETARY',
              'PT' : 'PROGRAM_TRADING',
              'S' : 'SALES',
              'T' : 'TRADING'
            }
          },
 '1034' : { name: 'DeskTypeSource', type: 'int',
            enums: {
              '1' : 'NASD_OATS'
            }
          },
 '1035' : { name: 'DeskOrderHandlingInst', type: 'multiplestringvalue',
            enums: {
              'ADD' : 'ADD_ON_ORDER',
              'AON' : 'ALL_OR_NONE',
              'CNH' : 'CASH_NOT_HELD',
              'DIR' : 'DIRECTED_ORDER',
              'E.W' : 'EXCHANGE_FOR_PHYSICAL_TRANSACTION',
              'FOK' : 'FILL_OR_KILL',
              'IO' : 'IMBALANCE_ONLY',
              'IOC' : 'IMMEDIATE_OR_CANCEL',
              'LOO' : 'LIMIT_ON_OPEN',
              'LOC' : 'LIMIT_ON_CLOSE',
              'MAO' : 'MARKET_AT_OPEN',
              'MAC' : 'MARKET_AT_CLOSE',
              'MOO' : 'MARKET_ON_OPEN',
              'MOC' : 'MARKET_ON_CLOSE',
              'MQT' : 'MINIMUM_QUANTITY',
              'NH' : 'NOT_HELD',
              'OVD' : 'OVER_THE_DAY',
              'PEG' : 'PEGGED',
              'RSV' : 'RESERVE_SIZE_ORDER',
              'S.W' : 'STOP_STOCK_TRANSACTION',
              'SCL' : 'SCALE',
              'TMO' : 'TIME_ORDER',
              'TS' : 'TRAILING_STOP',
              'WRK' : 'WORK'
            }
          },
 '1036' : { name: 'ExecAckStatus', type: 'char',
            enums: {
              '0' : 'RECEIVED_NOT_YET_PROCESSED',
              '1' : 'ACCEPTED',
              '2' : 'DONT_KNOW'
            }
          },
 '1037' : { name: 'UnderlyingDeliveryAmount', type: 'amt' },
 '1038' : { name: 'UnderlyingCapValue', type: 'amt' },
 '1039' : { name: 'UnderlyingSettlMethod', type: 'string' },
 '1040' : { name: 'SecondaryTradeID', type: 'string' },
 '1041' : { name: 'FirmTradeID', type: 'string' },
 '1042' : { name: 'SecondaryFirmTradeID', type: 'string' },
 '1043' : { name: 'CollApplType', type: 'int',
            enums: {
              '0' : 'SPECIFIC_DEPOSIT',
              '1' : 'GENERAL'
            }
          },
 '1044' : { name: 'UnderlyingAdjustedQuantity', type: 'qty' },
 '1045' : { name: 'UnderlyingFXRate', type: 'float' },
 '1046' : { name: 'UnderlyingFXRateCalc', type: 'char',
            enums: {
              'D' : 'DIVIDE',
              'M' : 'MULTIPLY'
            }
          },
 '1047' : { name: 'AllocPositionEffect', type: 'char',
            enums: {
              'O' : 'OPEN',
              'C' : 'CLOSE',
              'R' : 'ROLLED',
              'F' : 'FIFO'
            }
          },
 '1048' : { name: 'DealingCapacity', type: 'char',
            enums: {
              'A' : 'AGENT',
              'P' : 'PRINCIPAL',
              'R' : 'RISKLESS_PRINCIPAL'
            }
          },
 '1049' : { name: 'InstrmtAssignmentMethod', type: 'char',
            enums: {
              'P' : 'PRO_RATA',
              'R' : 'RANDOM'
            }
          },
 '1050' : { name: 'InstrumentPartyIDSource', type: 'char' },
 '1051' : { name: 'InstrumentPartyRole', type: 'int' },
 '1052' : { name: 'NoInstrumentPartySubIDs', type: 'numingroup' },
 '1053' : { name: 'InstrumentPartySubID', type: 'string' },
 '1054' : { name: 'InstrumentPartySubIDType', type: 'int' },
 '1055' : { name: 'PositionCurrency', type: 'string' },
 '1056' : { name: 'CalculatedCcyLastQty', type: 'qty' },
 '1057' : { name: 'AggressorIndicator', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
 '1058' : { name: 'NoUndlyInstrumentParties', type: 'numingroup' },
 '1059' : { name: 'UnderlyingInstrumentPartyID', type: 'string' },
 '1060' : { name: 'UnderlyingInstrumentPartyIDSource', type: 'char' },
 '1061' : { name: 'UnderlyingInstrumentPartyRole', type: 'int' },
 '1062' : { name: 'NoUndlyInstrumentPartySubIDs', type: 'numingroup' },
 '1063' : { name: 'UnderlyingInstrumentPartySubID', type: 'string' },
 '1064' : { name: 'UnderlyingInstrumentPartySubIDType', type: 'int' },
 '1065' : { name: 'BidSwapPoints', type: 'priceoffset' },
 '1066' : { name: 'OfferSwapPoints', type: 'priceoffset' },
 '1067' : { name: 'LegBidForwardPoints', type: 'priceoffset' },
 '1068' : { name: 'LegOfferForwardPoints', type: 'priceoffset' },
 '1069' : { name: 'SwapPoints', type: 'priceoffset' },
 '1070' : { name: 'MDQuoteType', type: 'int',
            enums: {
              '0' : 'INDICATIVE',
              '1' : 'TRADEABLE',
              '2' : 'RESTRICTED_TRADEABLE',
              '3' : 'COUNTER',
              '4' : 'INDICATIVE_AND_TRADEABLE'
            }
          },
 '1071' : { name: 'LastSwapPoints', type: 'priceoffset' },
 '1072' : { name: 'SideGrossTradeAmt', type: 'amt' },
 '1073' : { name: 'LegLastForwardPoints', type: 'priceoffset' },
 '1074' : { name: 'LegCalculatedCcyLastQty', type: 'qty' },
 '1075' : { name: 'LegGrossTradeAmt', type: 'amt' },
 '1079' : { name: 'MaturityTime', type: 'tztimeonly' },
 '1080' : { name: 'RefOrderID', type: 'string' },
 '1081' : { name: 'RefOrderIDSource', type: 'char',
            enums: {
              '0' : 'SECONDARYORDERID',
              '1' : 'ORDERID',
              '2' : 'MDENTRYID',
              '3' : 'QUOTEENTRYID',
              '4' : 'ORIGINAL_ORDER_ID'
            }
          },
 '1082' : { name: 'SecondaryDisplayQty', type: 'qty' },
 '1083' : { name: 'DisplayWhen', type: 'char',
            enums: {
              '1' : 'IMMEDIATE',
              '2' : 'EXHAUST'
            }
          },
 '1084' : { name: 'DisplayMethod', type: 'char',
            enums: {
              '1' : 'INITIAL',
              '2' : 'NEW',
              '3' : 'RANDOM',
              '4' : 'UNDISCLOSED'
            }
          },
 '1085' : { name: 'DisplayLowQty', type: 'qty' },
 '1086' : { name: 'DisplayHighQty', type: 'qty' },
 '1087' : { name: 'DisplayMinIncr', type: 'qty' },
 '1088' : { name: 'RefreshQty', type: 'qty' },
 '1089' : { name: 'MatchIncrement', type: 'qty' },
 '1090' : { name: 'MaxPriceLevels', type: 'int' },
 '1091' : { name: 'PreTradeAnonymity', type: 'boolean' },
 '1092' : { name: 'PriceProtectionScope', type: 'char',
            enums: {
              '0' : 'NONE',
              '1' : 'LOCAL',
              '2' : 'NATIONAL',
              '3' : 'GLOBAL'
            }
          },
 '1093' : { name: 'LotType', type: 'char',
            enums: {
              '1' : 'ODD_LOT',
              '2' : 'ROUND_LOT',
              '3' : 'BLOCK_LOT',
              '4' : 'ROUND_LOT_BASED_UPON_UNITOFMEASURE'
            }
          },
 '1094' : { name: 'PegPriceType', type: 'int',
            enums: {
              '1' : 'LAST_PEG',
              '2' : 'MID_PRICE_PEG',
              '3' : 'OPENING_PEG',
              '4' : 'MARKET_PEG',
              '5' : 'PRIMARY_PEG',
              '7' : 'PEG_TO_VWAP',
              '8' : 'TRAILING_STOP_PEG',
              '9' : 'PEG_TO_LIMIT_PRICE'
            }
          },
 '1095' : { name: 'PeggedRefPrice', type: 'price' },
 '1096' : { name: 'PegSecurityIDSource', type: 'string' },
 '1097' : { name: 'PegSecurityID', type: 'string' },
 '1098' : { name: 'PegSymbol', type: 'string' },
 '1099' : { name: 'PegSecurityDesc', type: 'string' },
 '1100' : { name: 'TriggerType', type: 'char',
            enums: {
              '1' : 'PARTIAL_EXECUTION',
              '2' : 'SPECIFIED_TRADING_SESSION',
              '3' : 'NEXT_AUCTION',
              '4' : 'PRICE_MOVEMENT'
            }
          },
 '1101' : { name: 'TriggerAction', type: 'char',
            enums: {
              '1' : 'ACTIVATE',
              '2' : 'MODIFY',
              '3' : 'CANCEL'
            }
          },
 '1102' : { name: 'TriggerPrice', type: 'price' },
 '1103' : { name: 'TriggerSymbol', type: 'string' },
 '1104' : { name: 'TriggerSecurityID', type: 'string' },
 '1105' : { name: 'TriggerSecurityIDSource', type: 'string' },
 '1106' : { name: 'TriggerSecurityDesc', type: 'string' },
 '1107' : { name: 'TriggerPriceType', type: 'char',
            enums: {
              '1' : 'BEST_OFFER',
              '2' : 'LAST_TRADE',
              '3' : 'BEST_BID',
              '4' : 'BEST_BID_OR_LAST_TRADE',
              '5' : 'BEST_OFFER_OR_LAST_TRADE',
              '6' : 'BEST_MID'
            }
          },
 '1108' : { name: 'TriggerPriceTypeScope', type: 'char',
            enums: {
              '0' : 'NONE',
              '1' : 'LOCAL',
              '2' : 'NATIONAL',
              '3' : 'GLOBAL'
            }
          },
 '1109' : { name: 'TriggerPriceDirection', type: 'char',
            enums: {
              'U' : 'TRIGGER_IF_THE_PRICE_OF_THE_SPECIFIED_TYPE_GOES_UP_TO_OR_THROUGH_THE_SPECIFIED_TRIGGER_PRICE',
              'D' : 'TRIGGER_IF_THE_PRICE_OF_THE_SPECIFIED_TYPE_GOES_DOWN_TO_OR_THROUGH_THE_SPECIFIED_TRIGGER_PRICE'
            }
          },
 '1110' : { name: 'TriggerNewPrice', type: 'price' },
 '1111' : { name: 'TriggerOrderType', type: 'char',
            enums: {
              '1' : 'MARKET',
              '2' : 'LIMIT'
            }
          },
 '1112' : { name: 'TriggerNewQty', type: 'qty' },
 '1113' : { name: 'TriggerTradingSessionID', type: 'string' },
 '1114' : { name: 'TriggerTradingSessionSubID', type: 'string' },
 '1115' : { name: 'OrderCategory', type: 'char',
            enums: {
              '1' : 'ORDER',
              '2' : 'QUOTE',
              '3' : 'PRIVATELY_NEGOTIATED_TRADE',
              '4' : 'MULTILEG_ORDER',
              '5' : 'LINKED_ORDER',
              '6' : 'QUOTE_REQUEST',
              '7' : 'IMPLIED_ORDER',
              '8' : 'CROSS_ORDER',
              '9' : 'STREAMING_PRICE'
            }
          },
 '1116' : { name: 'NoRootPartyIDs', type: 'numingroup' },
 '1117' : { name: 'RootPartyID', type: 'string' },
 '1118' : { name: 'RootPartyIDSource', type: 'char' },
 '1119' : { name: 'RootPartyRole', type: 'int' },
 '1120' : { name: 'NoRootPartySubIDs', type: 'numingroup' },
 '1121' : { name: 'RootPartySubID', type: 'string' },
 '1122' : { name: 'RootPartySubIDType', type: 'int' },
 '1123' : { name: 'TradeHandlingInstr', type: 'char',
            enums: {
              '0' : 'TRADE_CONFIRMATION',
              '1' : 'TWO_PARTY_REPORT',
              '2' : 'ONE_PARTY_REPORT_FOR_MATCHING',
              '3' : 'ONE_PARTY_REPORT_FOR_PASS_THROUGH',
              '4' : 'AUTOMATED_FLOOR_ORDER_ROUTING',
              '5' : 'TWO_PARTY_REPORT_FOR_CLAIM'
            }
          },
 '1124' : { name: 'OrigTradeHandlingInstr', type: 'char' },
 '1125' : { name: 'OrigTradeDate', type: 'localmktdate' },
 '1126' : { name: 'OrigTradeID', type: 'string' },
 '1127' : { name: 'OrigSecondaryTradeID', type: 'string' },
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
 '1132' : { name: 'TZTransactTime', type: 'tztimestamp' },
 '1133' : { name: 'ExDestinationIDSource', type: 'char',
            enums: {
              'B' : 'BIC',
              'C' : 'GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER',
              'D' : 'PROPRIETARY',
              'E' : 'ISO_COUNTRY_CODE',
              'G' : 'MIC'
            }
          },
 '1134' : { name: 'ReportedPxDiff', type: 'boolean' },
 '1135' : { name: 'RptSys', type: 'string' },
 '1136' : { name: 'AllocClearingFeeIndicator', type: 'string' },
 '1137' : { name: 'DefaultApplVerID', type: 'string' },
 '1138' : { name: 'DisplayQty', type: 'qty' },
 '1139' : { name: 'ExchangeSpecialInstructions', type: 'string' },
 '1140' : { name: 'MaxTradeVol', type: 'qty' },
 '1141' : { name: 'NoMDFeedTypes', type: 'numingroup' },
 '1142' : { name: 'MatchAlgorithm', type: 'string' },
 '1143' : { name: 'MaxPriceVariation', type: 'float' },
 '1144' : { name: 'ImpliedMarketIndicator', type: 'int',
            enums: {
              '0' : 'NOT_IMPLIED',
              '1' : 'IMPLIED_IN',
              '2' : 'IMPLIED_OUT',
              '3' : 'BOTH_IMPLIED_IN_AND_IMPLIED_OUT'
            }
          },
 '1145' : { name: 'EventTime', type: 'utctimestamp' },
 '1146' : { name: 'MinPriceIncrementAmount', type: 'amt' },
 '1147' : { name: 'UnitOfMeasureQty', type: 'qty' },
 '1148' : { name: 'LowLimitPrice', type: 'price' },
 '1149' : { name: 'HighLimitPrice', type: 'price' },
 '1150' : { name: 'TradingReferencePrice', type: 'price' },
 '1151' : { name: 'SecurityGroup', type: 'string' },
 '1152' : { name: 'LegNumber', type: 'int' },
 '1153' : { name: 'SettlementCycleNo', type: 'int' },
 '1154' : { name: 'SideCurrency', type: 'currency' },
 '1155' : { name: 'SideSettlCurrency', type: 'currency' },
 '1156' : { name: 'ApplExtID', type: 'int' },
 '1157' : { name: 'CcyAmt', type: 'amt' },
 '1158' : { name: 'NoSettlDetails', type: 'numingroup' },
 '1159' : { name: 'SettlObligMode', type: 'int',
            enums: {
              '1' : 'PRELIMINARY',
              '2' : 'FINAL'
            }
          },
 '1160' : { name: 'SettlObligMsgID', type: 'string' },
 '1161' : { name: 'SettlObligID', type: 'string' },
 '1162' : { name: 'SettlObligTransType', type: 'char',
            enums: {
              'C' : 'CANCEL',
              'N' : 'NEW',
              'R' : 'REPLACE',
              'T' : 'RESTATE'
            }
          },
 '1163' : { name: 'SettlObligRefID', type: 'string' },
 '1164' : { name: 'SettlObligSource', type: 'char',
            enums: {
              '1' : 'INSTRUCTIONS_OF_BROKER',
              '2' : 'INSTRUCTIONS_FOR_INSTITUTION',
              '3' : 'INVESTOR'
            }
          },
 '1165' : { name: 'NoSettlOblig', type: 'numingroup' },
 '1166' : { name: 'QuoteMsgID', type: 'string' },
 '1167' : { name: 'QuoteEntryStatus', type: 'int',
            enums: {
              '0' : 'ACCEPTED',
              '5' : 'REJECTED',
              '6' : 'REMOVED_FROM_MARKET',
              '7' : 'EXPIRED',
              '12' : 'LOCKED_MARKET_WARNING',
              '13' : 'CROSS_MARKET_WARNING',
              '14' : 'CANCELED_DUE_TO_LOCK_MARKET',
              '15' : 'CANCELED_DUE_TO_CROSS_MARKET',
              '16' : 'ACTIVE'
            }
          },
 '1168' : { name: 'TotNoCxldQuotes', type: 'int' },
 '1169' : { name: 'TotNoAccQuotes', type: 'int' },
 '1170' : { name: 'TotNoRejQuotes', type: 'int' },
 '1171' : { name: 'PrivateQuote', type: 'boolean',
            enums: {
              'Y' : 'YES',
              'N' : 'NO'
            }
          },
 '1172' : { name: 'RespondentType', type: 'int',
            enums: {
              '1' : 'ALL_MARKET_PARTICIPANTS',
              '2' : 'SPECIFIED_MARKET_PARTICIPANTS',
              '3' : 'ALL_MARKET_MAKERS',
              '4' : 'PRIMARY_MARKET_MAKER'
            }
          },
 '1173' : { name: 'MDSubBookType', type: 'int' },
 '1174' : { name: 'SecurityTradingEvent', type: 'int',
            enums: {
              '1' : 'ORDER_IMBALANCE_AUCTION_IS_EXTENDED',
              '2' : 'TRADING_RESUMES',
              '3' : 'PRICE_VOLATILITY_INTERRUPTION',
              '4' : 'CHANGE_OF_TRADING_SESSION',
              '5' : 'CHANGE_OF_TRADING_SUBSESSION',
              '6' : 'CHANGE_OF_SECURITY_TRADING_STATUS',
              '7' : 'CHANGE_OF_BOOK_TYPE',
              '8' : 'CHANGE_OF_MARKET_DEPTH'
            }
          },
 '1175' : { name: 'NoStatsIndicators', type: 'numingroup' },
 '1176' : { name: 'StatsType', type: 'int',
            enums: {
              '1' : 'EXCHANGE_LAST',
              '2' : 'HIGH',
              '3' : 'AVERAGE_PRICE',
              '4' : 'TURNOVER'
            }
          },
 '1177' : { name: 'NoOfSecSizes', type: 'numingroup' },
 '1178' : { name: 'MDSecSizeType', type: 'int',
            enums: {
              '1' : 'CUSTOMER'
            }
          },
 '1179' : { name: 'MDSecSize', type: 'qty' },
 '1180' : { name: 'ApplID', type: 'string' },
 '1181' : { name: 'ApplSeqNum', type: 'seqnum' },
 '1182' : { name: 'ApplBegSeqNum', type: 'seqnum' },
 '1183' : { name: 'ApplEndSeqNum', type: 'seqnum' },
 '1184' : { name: 'SecurityXMLLen', type: 'length' },
 '1185' : { name: 'SecurityXML', type: 'xmldata' },
 '1186' : { name: 'SecurityXMLSchema', type: 'string' },
 '1187' : { name: 'RefreshIndicator', type: 'boolean' },
 '1188' : { name: 'Volatility', type: 'float' },
 '1189' : { name: 'TimeToExpiration', type: 'float' },
 '1190' : { name: 'RiskFreeRate', type: 'float' },
 '1191' : { name: 'PriceUnitOfMeasure', type: 'string' },
 '1192' : { name: 'PriceUnitOfMeasureQty', type: 'qty' },
 '1193' : { name: 'SettlMethod', type: 'char',
            enums: {
              'C' : 'CASH_SETTLEMENT_REQUIRED',
              'P' : 'PHYSICAL_SETTLEMENT_REQUIRED'
            }
          },
 '1194' : { name: 'ExerciseStyle', type: 'int',
            enums: {
              '0' : 'EUROPEAN',
              '1' : 'AMERICAN',
              '2' : 'BERMUDA'
            }
          },
 '1195' : { name: 'OptPayoutAmount', type: 'amt' },
 '1196' : { name: 'PriceQuoteMethod', type: 'string',
            enums: {
              'STD' : 'STANDARD_MONEY_PER_UNIT_OF_A_PHYSICAL',
              'INX' : 'INDEX',
              'INT' : 'INTEREST_RATE_INDEX',
              'PCTPAR' : 'PERCENT_OF_PAR'
            }
          },
 '1197' : { name: 'ValuationMethod', type: 'string',
            enums: {
              'EQTY' : 'PREMIUM_STYLE',
              'FUT' : 'FUTURES_STYLE_MARK_TO_MARKET',
              'FUTDA' : 'FUTURES_STYLE_WITH_AN_ATTACHED_CASH_ADJUSTMENT',
              'CDS' : 'CDS_STYLE_COLLATERALIZATION_OF_MARKET_TO_MARKET_AND_COUPON',
              'CDSD' : 'CDS_IN_DELIVERY'
            }
          },
 '1198' : { name: 'ListMethod', type: 'int',
            enums: {
              '0' : 'PRE_LISTED_ONLY',
              '1' : 'USER_REQUESTED'
            }
          },
 '1199' : { name: 'CapPrice', type: 'price' },
 '1200' : { name: 'FloorPrice', type: 'price' },
 '1201' : { name: 'NoStrikeRules', type: 'numingroup' },
 '1202' : { name: 'StartStrikePxRange', type: 'price' },
 '1203' : { name: 'EndStrikePxRange', type: 'price' },
 '1204' : { name: 'StrikeIncrement', type: 'float' },
 '1205' : { name: 'NoTickRules', type: 'numingroup' },
 '1206' : { name: 'StartTickPriceRange', type: 'price' },
 '1207' : { name: 'EndTickPriceRange', type: 'price' },
 '1208' : { name: 'TickIncrement', type: 'price' },
 '1209' : { name: 'TickRuleType', type: 'int',
            enums: {
              '0' : 'REGULAR',
              '1' : 'VARIABLE',
              '2' : 'FIXED',
              '3' : 'TRADED_AS_A_SPREAD_LEG',
              '4' : 'SETTLED_AS_A_SPREAD_LEG'
            }
          },
 '1210' : { name: 'NestedInstrAttribType', type: 'int' },
 '1211' : { name: 'NestedInstrAttribValue', type: 'string' },
 '1212' : { name: 'LegMaturityTime', type: 'tztimeonly' },
 '1213' : { name: 'UnderlyingMaturityTime', type: 'tztimeonly' },
 '1214' : { name: 'DerivativeSymbol', type: 'string' },
 '1215' : { name: 'DerivativeSymbolSfx', type: 'string' },
 '1216' : { name: 'DerivativeSecurityID', type: 'string' },
 '1217' : { name: 'DerivativeSecurityIDSource', type: 'string' },
 '1218' : { name: 'NoDerivativeSecurityAltID', type: 'numingroup' },
 '1219' : { name: 'DerivativeSecurityAltID', type: 'string' },
 '1220' : { name: 'DerivativeSecurityAltIDSource', type: 'string' },
 '1221' : { name: 'SecondaryLowLimitPrice', type: 'price' },
 '1222' : { name: 'MaturityRuleID', type: 'string' },
 '1223' : { name: 'StrikeRuleID', type: 'string' },
 '1224' : { name: 'LegUnitOfMeasureQty', type: 'qty' },
 '1225' : { name: 'DerivativeOptPayAmount', type: 'amt' },
 '1226' : { name: 'EndMaturityMonthYear', type: 'monthyear' },
 '1227' : { name: 'ProductComplex', type: 'string' },
 '1228' : { name: 'DerivativeProductComplex', type: 'string' },
 '1229' : { name: 'MaturityMonthYearIncrement', type: 'int' },
 '1230' : { name: 'SecondaryHighLimitPrice', type: 'price' },
 '1231' : { name: 'MinLotSize', type: 'qty' },
 '1232' : { name: 'NoExecInstRules', type: 'numingroup' },
 '1234' : { name: 'NoLotTypeRules', type: 'numingroup' },
 '1235' : { name: 'NoMatchRules', type: 'numingroup' },
 '1236' : { name: 'NoMaturityRules', type: 'numingroup' },
 '1237' : { name: 'NoOrdTypeRules', type: 'numingroup' },
 '1239' : { name: 'NoTimeInForceRules', type: 'numingroup' },
 '1240' : { name: 'SecondaryTradingReferencePrice', type: 'price' },
 '1241' : { name: 'StartMaturityMonthYear', type: 'monthyear' },
 '1242' : { name: 'FlexProductEligibilityIndicator', type: 'boolean' },
 '1243' : { name: 'DerivFlexProductEligibilityIndicator', type: 'boolean' },
 '1244' : { name: 'FlexibleIndicator', type: 'boolean' },
 '1245' : { name: 'TradingCurrency', type: 'currency' },
 '1246' : { name: 'DerivativeProduct', type: 'int' },
 '1247' : { name: 'DerivativeSecurityGroup', type: 'string' },
 '1248' : { name: 'DerivativeCFICode', type: 'string' },
 '1249' : { name: 'DerivativeSecurityType', type: 'string' },
 '1250' : { name: 'DerivativeSecuritySubType', type: 'string' },
 '1251' : { name: 'DerivativeMaturityMonthYear', type: 'monthyear' },
 '1252' : { name: 'DerivativeMaturityDate', type: 'localmktdate' },
 '1253' : { name: 'DerivativeMaturityTime', type: 'tztimeonly' },
 '1254' : { name: 'DerivativeSettleOnOpenFlag', type: 'string' },
 '1255' : { name: 'DerivativeInstrmtAssignmentMethod', type: 'char' },
 '1256' : { name: 'DerivativeSecurityStatus', type: 'string' },
 '1257' : { name: 'DerivativeInstrRegistry', type: 'string' },
 '1258' : { name: 'DerivativeCountryOfIssue', type: 'country' },
 '1259' : { name: 'DerivativeStateOrProvinceOfIssue', type: 'string' },
 '1260' : { name: 'DerivativeLocaleOfIssue', type: 'string' },
 '1261' : { name: 'DerivativeStrikePrice', type: 'price' },
 '1262' : { name: 'DerivativeStrikeCurrency', type: 'currency' },
 '1263' : { name: 'DerivativeStrikeMultiplier', type: 'float' },
 '1264' : { name: 'DerivativeStrikeValue', type: 'float' },
 '1265' : { name: 'DerivativeOptAttribute', type: 'char' },
 '1266' : { name: 'DerivativeContractMultiplier', type: 'float' },
 '1267' : { name: 'DerivativeMinPriceIncrement', type: 'float' },
 '1268' : { name: 'DerivativeMinPriceIncrementAmount', type: 'amt' },
 '1269' : { name: 'DerivativeUnitOfMeasure', type: 'string' },
 '1270' : { name: 'DerivativeUnitOfMeasureQty', type: 'qty' },
 '1271' : { name: 'DerivativeTimeUnit', type: 'string' },
 '1272' : { name: 'DerivativeSecurityExchange', type: 'exchange' },
 '1273' : { name: 'DerivativePositionLimit', type: 'int' },
 '1274' : { name: 'DerivativeNTPositionLimit', type: 'int' },
 '1275' : { name: 'DerivativeIssuer', type: 'string' },
 '1276' : { name: 'DerivativeIssueDate', type: 'localmktdate' },
 '1277' : { name: 'DerivativeEncodedIssuerLen', type: 'length' },
 '1278' : { name: 'DerivativeEncodedIssuer', type: 'data' },
 '1279' : { name: 'DerivativeSecurityDesc', type: 'string' },
 '1280' : { name: 'DerivativeEncodedSecurityDescLen', type: 'length' },
 '1281' : { name: 'DerivativeEncodedSecurityDesc', type: 'data' },
 '1282' : { name: 'DerivativeSecurityXMLLen', type: 'length' },
 '1283' : { name: 'DerivativeSecurityXML', type: 'data' },
 '1284' : { name: 'DerivativeSecurityXMLSchema', type: 'string' },
 '1285' : { name: 'DerivativeContractSettlMonth', type: 'monthyear' },
 '1286' : { name: 'NoDerivativeEvents', type: 'numingroup' },
 '1287' : { name: 'DerivativeEventType', type: 'int' },
 '1288' : { name: 'DerivativeEventDate', type: 'localmktdate' },
 '1289' : { name: 'DerivativeEventTime', type: 'utctimestamp' },
 '1290' : { name: 'DerivativeEventPx', type: 'price' },
 '1291' : { name: 'DerivativeEventText', type: 'string' },
 '1292' : { name: 'NoDerivativeInstrumentParties', type: 'numingroup' },
 '1293' : { name: 'DerivativeInstrumentPartyID', type: 'string' },
 '1294' : { name: 'DerivativeInstrumentPartyIDSource', type: 'string' },
 '1295' : { name: 'DerivativeInstrumentPartyRole', type: 'int' },
 '1296' : { name: 'NoDerivativeInstrumentPartySubIDs', type: 'numingroup' },
 '1297' : { name: 'DerivativeInstrumentPartySubID', type: 'string' },
 '1298' : { name: 'DerivativeInstrumentPartySubIDType', type: 'int' },
 '1299' : { name: 'DerivativeExerciseStyle', type: 'char' },
 '1300' : { name: 'MarketSegmentID', type: 'string' },
 '1301' : { name: 'MarketID', type: 'exchange' },
 '1302' : { name: 'MaturityMonthYearIncrementUnits', type: 'int',
            enums: {
              '0' : 'MONTHS',
              '1' : 'DAYS',
              '2' : 'WEEKS',
              '3' : 'YEARS'
            }
          },
 '1303' : { name: 'MaturityMonthYearFormat', type: 'int',
            enums: {
              '0' : 'YEARMONTH_ONLY',
              '1' : 'YEARMONTHDAY',
              '2' : 'YEARMONTHWEEK'
            }
          },
 '1304' : { name: 'StrikeExerciseStyle', type: 'int' },
 '1305' : { name: 'SecondaryPriceLimitType', type: 'int' },
 '1306' : { name: 'PriceLimitType', type: 'int',
            enums: {
              '0' : 'PRICE',
              '1' : 'TICKS',
              '2' : 'PERCENTAGE'
            }
          },
 '1308' : { name: 'ExecInstValue', type: 'char' },
 '1309' : { name: 'NoTradingSessionRules', type: 'numingroup' },
 '1310' : { name: 'NoMarketSegments', type: 'numingroup' },
 '1311' : { name: 'NoDerivativeInstrAttrib', type: 'numingroup' },
 '1312' : { name: 'NoNestedInstrAttrib', type: 'numingroup' },
 '1313' : { name: 'DerivativeInstrAttribType', type: 'int' },
 '1314' : { name: 'DerivativeInstrAttribValue', type: 'string' },
 '1315' : { name: 'DerivativePriceUnitOfMeasure', type: 'string' },
 '1316' : { name: 'DerivativePriceUnitOfMeasureQty', type: 'qty' },
 '1317' : { name: 'DerivativeSettlMethod', type: 'char' },
 '1318' : { name: 'DerivativePriceQuoteMethod', type: 'string' },
 '1319' : { name: 'DerivativeValuationMethod', type: 'string' },
 '1320' : { name: 'DerivativeListMethod', type: 'int' },
 '1321' : { name: 'DerivativeCapPrice', type: 'price' },
 '1322' : { name: 'DerivativeFloorPrice', type: 'price' },
 '1323' : { name: 'DerivativePutOrCall', type: 'int' },
 '1324' : { name: 'ListUpdateAction', type: 'char' },
 '1325' : { name: 'ParentMktSegmID', type: 'string' },
 '1326' : { name: 'TradingSessionDesc', type: 'string' },
 '1327' : { name: 'TradSesUpdateAction', type: 'char' },
 '1328' : { name: 'RejectText', type: 'string' },
 '1329' : { name: 'FeeMultiplier', type: 'float' },
 '1330' : { name: 'UnderlyingLegSymbol', type: 'string' },
 '1331' : { name: 'UnderlyingLegSymbolSfx', type: 'string' },
 '1332' : { name: 'UnderlyingLegSecurityID', type: 'string' },
 '1333' : { name: 'UnderlyingLegSecurityIDSource', type: 'string' },
 '1334' : { name: 'NoUnderlyingLegSecurityAltID', type: 'numingroup' },
 '1335' : { name: 'UnderlyingLegSecurityAltID', type: 'string' },
 '1336' : { name: 'UnderlyingLegSecurityAltIDSource', type: 'string' },
 '1337' : { name: 'UnderlyingLegSecurityType', type: 'string' },
 '1338' : { name: 'UnderlyingLegSecuritySubType', type: 'string' },
 '1339' : { name: 'UnderlyingLegMaturityMonthYear', type: 'monthyear' },
 '1340' : { name: 'UnderlyingLegStrikePrice', type: 'price' },
 '1341' : { name: 'UnderlyingLegSecurityExchange', type: 'string' },
 '1342' : { name: 'NoOfLegUnderlyings', type: 'numingroup' },
 '1343' : { name: 'UnderlyingLegPutOrCall', type: 'int' },
 '1344' : { name: 'UnderlyingLegCFICode', type: 'string' },
 '1345' : { name: 'UnderlyingLegMaturityDate', type: 'localmktdate' },
 '1346' : { name: 'ApplReqID', type: 'string' },
 '1347' : { name: 'ApplReqType', type: 'int',
            enums: {
              '0' : 'RETRANSMISSION_OF_APPLICATION_MESSAGES_FOR_THE_SPECIFIED_APPLICATIONS',
              '1' : 'SUBSCRIPTION_TO_THE_SPECIFIED_APPLICATIONS',
              '2' : 'REQUEST_FOR_THE_LAST_APPLLASTSEQNUM_PUBLISHED_FOR_THE_SPECIFIED_APPLICATIONS',
              '3' : 'REQUEST_VALID_SET_OF_APPLICATIONS',
              '4' : 'UNSUBSCRIBE_TO_THE_SPECIFIED_APPLICATIONS',
              '5' : 'CANCEL_RETRANSMISSION',
              '6' : 'CANCEL_RETRANSMISSION_AND_UNSUBSCRIBE_TO_THE_SPECIFIED_APPLICATIONS'
            }
          },
 '1348' : { name: 'ApplResponseType', type: 'int',
            enums: {
              '0' : 'REQUEST_SUCCESSFULLY_PROCESSED',
              '1' : 'APPLICATION_DOES_NOT_EXIST',
              '2' : 'MESSAGES_NOT_AVAILABLE'
            }
          },
 '1349' : { name: 'ApplTotalMessageCount', type: 'int' },
 '1350' : { name: 'ApplLastSeqNum', type: 'seqnum' },
 '1351' : { name: 'NoApplIDs', type: 'numingroup' },
 '1352' : { name: 'ApplResendFlag', type: 'boolean' },
 '1353' : { name: 'ApplResponseID', type: 'string' },
 '1354' : { name: 'ApplResponseError', type: 'int',
            enums: {
              '0' : 'APPLICATION_DOES_NOT_EXIST',
              '1' : 'MESSAGES_REQUESTED_ARE_NOT_AVAILABLE',
              '2' : 'USER_NOT_AUTHORIZED_FOR_APPLICATION'
            }
          },
 '1355' : { name: 'RefApplID', type: 'string' },
 '1356' : { name: 'ApplReportID', type: 'string' },
 '1357' : { name: 'RefApplLastSeqNum', type: 'seqnum' },
 '1358' : { name: 'LegPutOrCall', type: 'int' },
 '1361' : { name: 'TotNoFills', type: 'int' },
 '1362' : { name: 'NoFills', type: 'numingroup' },
 '1363' : { name: 'FillExecID', type: 'string' },
 '1364' : { name: 'FillPx', type: 'price' },
 '1365' : { name: 'FillQty', type: 'qty' },
 '1366' : { name: 'LegAllocID', type: 'string' },
 '1367' : { name: 'LegAllocSettlCurrency', type: 'currency' },
 '1368' : { name: 'TradSesEvent', type: 'int',
            enums: {
              '0' : 'TRADING_RESUMES',
              '1' : 'CHANGE_OF_TRADING_SESSION',
              '2' : 'CHANGE_OF_TRADING_SUBSESSION',
              '3' : 'CHANGE_OF_TRADING_STATUS'
            }
          },
 '1369' : { name: 'MassActionReportID', type: 'string' },
 '1370' : { name: 'NoNotAffectedOrders', type: 'numingroup' },
 '1371' : { name: 'NotAffectedOrderID', type: 'string' },
 '1372' : { name: 'NotAffOrigClOrdID', type: 'string' },
 '1373' : { name: 'MassActionType', type: 'int',
            enums: {
              '1' : 'SUSPEND_ORDERS',
              '2' : 'RELEASE_ORDERS_FROM_SUSPENSION',
              '3' : 'CANCEL_ORDERS'
            }
          },
 '1374' : { name: 'MassActionScope', type: 'int',
            enums: {
              '1' : 'ALL_ORDERS_FOR_A_SECURITY',
              '2' : 'ALL_ORDERS_FOR_AN_UNDERLYING_SECURITY',
              '3' : 'ALL_ORDERS_FOR_A_PRODUCT',
              '4' : 'ALL_ORDERS_FOR_A_CFICODE',
              '5' : 'ALL_ORDERS_FOR_A_SECURITYTYPE',
              '6' : 'ALL_ORDERS_FOR_A_TRADING_SESSION',
              '7' : 'ALL_ORDERS',
              '8' : 'ALL_ORDERS_FOR_A_MARKET',
              '9' : 'ALL_ORDERS_FOR_A_MARKET_SEGMENT',
              '10' : 'ALL_ORDERS_FOR_A_SECURITY_GROUP',
              '11' : 'CANCEL_FOR_SECURITY_ISSUER',
              '12' : 'CANCEL_FOR_ISSUER_OF_UNDERLYING_SECURITY'
            }
          },
 '1375' : { name: 'MassActionResponse', type: 'int',
            enums: {
              '0' : 'REJECTED',
              '1' : 'ACCEPTED'
            }
          },
 '1376' : { name: 'MassActionRejectReason', type: 'int',
            enums: {
              '0' : 'MASS_ACTION_NOT_SUPPORTED',
              '1' : 'INVALID_OR_UNKNOWN_SECURITY',
              '2' : 'INVALID_OR_UNKNOWN_UNDERLYING_SECURITY',
              '3' : 'INVALID_OR_UNKNOWN_PRODUCT',
              '4' : 'INVALID_OR_UNKNOWN_CFICODE',
              '5' : 'INVALID_OR_UNKNOWN_SECURITYTYPE',
              '6' : 'INVALID_OR_UNKNOWN_TRADING_SESSION',
              '7' : 'INVALID_OR_UNKNOWN_MARKET',
              '8' : 'INVALID_OR_UNKNOWN_MARKET_SEGMENT',
              '9' : 'INVALID_OR_UNKNOWN_SECURITY_GROUP',
              '99' : 'OTHER',
              '10' : 'INVALID_OR_UNKNOWN_SECURITY_ISSUER',
              '11' : 'INVALID_OR_UNKNOWN_ISSUER_OF_UNDERLYING_SECURITY'
            }
          },
 '1377' : { name: 'MultilegModel', type: 'int',
            enums: {
              '0' : 'PREDEFINED_MULTILEG_SECURITY',
              '1' : 'USER_DEFINED_MULTLEG_SECURITY',
              '2' : 'USER_DEFINED_NON_SECURITIZED_MULTILEG'
            }
          },
 '1378' : { name: 'MultilegPriceMethod', type: 'int',
            enums: {
              '0' : 'NET_PRICE',
              '1' : 'REVERSED_NET_PRICE',
              '2' : 'YIELD_DIFFERENCE',
              '3' : 'INDIVIDUAL',
              '4' : 'CONTRACT_WEIGHTED_AVERAGE_PRICE',
              '5' : 'MULTIPLIED_PRICE'
            }
          },
 '1379' : { name: 'LegVolatility', type: 'float' },
 '1380' : { name: 'DividendYield', type: 'percentage' },
 '1381' : { name: 'LegDividendYield', type: 'percentage' },
 '1382' : { name: 'CurrencyRatio', type: 'float' },
 '1383' : { name: 'LegCurrencyRatio', type: 'float' },
 '1384' : { name: 'LegExecInst', type: 'multiplecharvalue' },
 '1385' : { name: 'ContingencyType', type: 'int',
            enums: {
              '1' : 'ONE_CANCELS_THE_OTHER',
              '2' : 'ONE_TRIGGERS_THE_OTHER',
              '3' : 'ONE_UPDATES_THE_OTHER_3',
              '4' : 'ONE_UPDATES_THE_OTHER_4'
            }
          },
 '1386' : { name: 'ListRejectReason', type: 'int',
            enums: {
              '0' : 'BROKER',
              '2' : 'EXCHANGE_CLOSED',
              '4' : 'TOO_LATE_TO_ENTER',
              '5' : 'UNKNOWN_ORDER',
              '6' : 'DUPLICATE_ORDER',
              '11' : 'UNSUPPORTED_ORDER_CHARACTERISTIC',
              '99' : 'OTHER'
            }
          },
 '1387' : { name: 'NoTrdRepIndicators', type: 'numingroup' },
 '1388' : { name: 'TrdRepPartyRole', type: 'int' },
 '1389' : { name: 'TrdRepIndicator', type: 'boolean' },
 '1390' : { name: 'TradePublishIndicator', type: 'int',
            enums: {
              '0' : 'DO_NOT_PUBLISH_TRADE',
              '1' : 'PUBLISH_TRADE',
              '2' : 'DEFERRED_PUBLICATION'
            }
          },
 '1391' : { name: 'UnderlyingLegOptAttribute', type: 'char' },
 '1392' : { name: 'UnderlyingLegSecurityDesc', type: 'string' },
 '1393' : { name: 'MarketReqID', type: 'string' },
 '1394' : { name: 'MarketReportID', type: 'string' },
 '1395' : { name: 'MarketUpdateAction', type: 'char',
            enums: {
              'A' : 'ADD',
              'D' : 'DELETE',
              'M' : 'MODIFY'
            }
          },
 '1396' : { name: 'MarketSegmentDesc', type: 'string' },
 '1397' : { name: 'EncodedMktSegmDescLen', type: 'length' },
 '1398' : { name: 'EncodedMktSegmDesc', type: 'data' },
 '1399' : { name: 'ApplNewSeqNum', type: 'seqnum' },
 '1400' : { name: 'EncryptedPasswordMethod', type: 'int' },
 '1401' : { name: 'EncryptedPasswordLen', type: 'length' },
 '1402' : { name: 'EncryptedPassword', type: 'data' },
 '1403' : { name: 'EncryptedNewPasswordLen', type: 'length' },
 '1404' : { name: 'EncryptedNewPassword', type: 'data' },
 '1405' : { name: 'UnderlyingLegMaturityTime', type: 'tztimeonly' },
 '1406' : { name: 'RefApplExtID', type: 'int' },
 '1407' : { name: 'DefaultApplExtID', type: 'int' },
 '1408' : { name: 'DefaultCstmApplVerID', type: 'string' },
 '1409' : { name: 'SessionStatus', type: 'int',
            enums: {
              '0' : 'SESSION_ACTIVE',
              '1' : 'SESSION_PASSWORD_CHANGED',
              '2' : 'SESSION_PASSWORD_DUE_TO_EXPIRE',
              '3' : 'NEW_SESSION_PASSWORD_DOES_NOT_COMPLY_WITH_POLICY',
              '4' : 'SESSION_LOGOUT_COMPLETE',
              '5' : 'INVALID_USERNAME_OR_PASSWORD',
              '6' : 'ACCOUNT_LOCKED',
              '7' : 'LOGONS_ARE_NOT_ALLOWED_AT_THIS_TIME',
              '8' : 'PASSWORD_EXPIRED'
            }
          },
 '1410' : { name: 'DefaultVerIndicator', type: 'boolean' },
 '1411' : { name: 'Nested4PartySubIDType', type: 'int' },
 '1412' : { name: 'Nested4PartySubID', type: 'string' },
 '1413' : { name: 'NoNested4PartySubIDs', type: 'numingroup' },
 '1414' : { name: 'NoNested4PartyIDs', type: 'numingroup' },
 '1415' : { name: 'Nested4PartyID', type: 'string' },
 '1416' : { name: 'Nested4PartyIDSource', type: 'char' },
 '1417' : { name: 'Nested4PartyRole', type: 'int' },
 '1418' : { name: 'LegLastQty', type: 'qty' },
 '1419' : { name: 'UnderlyingExerciseStyle', type: 'int' },
 '1420' : { name: 'LegExerciseStyle', type: 'int' },
 '1421' : { name: 'LegPriceUnitOfMeasure', type: 'string' },
 '1422' : { name: 'LegPriceUnitOfMeasureQty', type: 'qty' },
 '1423' : { name: 'UnderlyingUnitOfMeasureQty', type: 'qty' },
 '1424' : { name: 'UnderlyingPriceUnitOfMeasure', type: 'string' },
 '1425' : { name: 'UnderlyingPriceUnitOfMeasureQty', type: 'qty' },
 '1426' : { name: 'ApplReportType', type: 'int',
            enums: {
              '0' : 'RESET_APPLSEQNUM_TO_NEW_VALUE_SPECIFIED_IN_APPLNEWSEQNUM',
              '1' : 'REPORTS_THAT_THE_LAST_MESSAGE_HAS_BEEN_SENT_FOR_THE_APPLIDS_REFER_TO_REFAPPLLASTSEQNUM',
              '2' : 'HEARTBEAT_MESSAGE_INDICATING_THAT_APPLICATION_IDENTIFIED_BY_REFAPPLID',
              '3' : 'APPLICATION_MESSAGE_RE_SEND_COMPLETED'
            }
          },
 '1427' : { name: 'SideExecID', type: 'string' },
 '1428' : { name: 'OrderDelay', type: 'int' },
 '1429' : { name: 'OrderDelayUnit', type: 'int',
            enums: {
              '0' : 'SECONDS',
              '1' : 'TENTHS_OF_A_SECOND',
              '2' : 'HUNDREDTHS_OF_A_SECOND',
              '3' : 'MILLISECONDS',
              '4' : 'MICROSECONDS',
              '5' : 'NANOSECONDS',
              '10' : 'MINUTES',
              '11' : 'HOURS',
              '12' : 'DAYS',
              '13' : 'WEEKS',
              '14' : 'MONTHS',
              '15' : 'YEARS'
            }
          },
 '1430' : { name: 'VenueType', type: 'char',
            enums: {
              'E' : 'ELECTRONIC',
              'P' : 'PIT',
              'X' : 'EX_PIT'
            }
          },
 '1431' : { name: 'RefOrdIDReason', type: 'int',
            enums: {
              '0' : 'GTC_FROM_PREVIOUS_DAY',
              '1' : 'PARTIAL_FILL_REMAINING',
              '2' : 'ORDER_CHANGED'
            }
          },
 '1432' : { name: 'OrigCustOrderCapacity', type: 'int',
            enums: {
              '1' : 'MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT',
              '2' : 'CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT',
              '3' : 'MEMBER_TRADING_FOR_ANOTHER_MEMBER',
              '4' : 'ALL_OTHER'
            }
          },
 '1433' : { name: 'RefApplReqID', type: 'string' },
 '1434' : { name: 'ModelType', type: 'int',
            enums: {
              '0' : 'UTILITY_PROVIDED_STANDARD_MODEL',
              '1' : 'PROPRIETARY'
            }
          },
 '1435' : { name: 'ContractMultiplierUnit', type: 'int',
            enums: {
              '0' : 'SHARES',
              '1' : 'HOURS',
              '2' : 'DAYS'
            }
          },
 '1436' : { name: 'LegContractMultiplierUnit', type: 'int' },
 '1437' : { name: 'UnderlyingContractMultiplierUnit', type: 'int' },
 '1438' : { name: 'DerivativeContractMultiplierUnit', type: 'int' },
 '1439' : { name: 'FlowScheduleType', type: 'int',
            enums: {
              '0' : 'NERC_EASTERN_OFF_PEAK',
              '1' : 'NERC_WESTERN_OFF_PEAK',
              '2' : 'NERC_CALENDAR_ALL_DAYS_IN_MONTH',
              '3' : 'NERC_EASTERN_PEAK',
              '4' : 'NERC_WESTERN_PEAK'
            }
          },
 '1440' : { name: 'LegFlowScheduleType', type: 'int' },
 '1441' : { name: 'UnderlyingFlowScheduleType', type: 'int' },
 '1442' : { name: 'DerivativeFlowScheduleType', type: 'int' },
 '1443' : { name: 'FillLiquidityInd', type: 'int' },
 '1444' : { name: 'SideLiquidityInd', type: 'int' },
 '1445' : { name: 'NoRateSources', type: 'numingroup' },
 '1446' : { name: 'RateSource', type: 'int',
            enums: {
              '0' : 'BLOOMBERG',
              '1' : 'REUTERS',
              '2' : 'TELERATE',
              '99' : 'OTHER'
            }
          },
 '1447' : { name: 'RateSourceType', type: 'int',
            enums: {
              '0' : 'PRIMARY',
              '1' : 'SECONDARY'
            }
          },
 '1448' : { name: 'ReferencePage', type: 'string' },
 '1449' : { name: 'RestructuringType', type: 'string',
            enums: {
              'FR' : 'FULL_RESTRUCTURING',
              'MR' : 'MODIFIED_RESTRUCTURING',
              'MM' : 'MODIFIED_MOD_RESTRUCTURING',
              'XR' : 'NO_RESTRUCTURING_SPECIFIED'
            }
          },
 '1450' : { name: 'Seniority', type: 'string',
            enums: {
              'SD' : 'SENIOR_SECURED',
              'SR' : 'SENIOR',
              'SB' : 'SUBORDINATED'
            }
          },
 '1451' : { name: 'NotionalPercentageOutstanding', type: 'percentage' },
 '1452' : { name: 'OriginalNotionalPercentageOutstanding', type: 'percentage' },
 '1453' : { name: 'UnderlyingRestructuringType', type: 'string' },
 '1454' : { name: 'UnderlyingSeniority', type: 'string' },
 '1455' : { name: 'UnderlyingNotionalPercentageOutstanding', type: 'percentage' },
 '1456' : { name: 'UnderlyingOriginalNotionalPercentageOutstanding', type: 'percentage' },
 '1457' : { name: 'AttachmentPoint', type: 'percentage' },
 '1458' : { name: 'DetachmentPoint', type: 'percentage' },
 '1459' : { name: 'UnderlyingAttachmentPoint', type: 'percentage' },
 '1460' : { name: 'UnderlyingDetachmentPoint', type: 'percentage' },
 '1461' : { name: 'NoTargetPartyIDs', type: 'numingroup' },
 '1462' : { name: 'TargetPartyID', type: 'string' },
 '1463' : { name: 'TargetPartyIDSource', type: 'char' },
 '1464' : { name: 'TargetPartyRole', type: 'int' },
 '1465' : { name: 'SecurityListID', type: 'string' },
 '1466' : { name: 'SecurityListRefID', type: 'string' },
 '1467' : { name: 'SecurityListDesc', type: 'string' },
 '1468' : { name: 'EncodedSecurityListDescLen', type: 'length' },
 '1469' : { name: 'EncodedSecurityListDesc', type: 'data' },
 '1470' : { name: 'SecurityListType', type: 'int',
            enums: {
              '1' : 'INDUSTRY_CLASSIFICATION',
              '2' : 'TRADING_LIST',
              '3' : 'MARKET',
              '4' : 'NEWSPAPER_LIST'
            }
          },
 '1471' : { name: 'SecurityListTypeSource', type: 'int',
            enums: {
              '1' : 'ICB',
              '2' : 'NAICS',
              '3' : 'GICS'
            }
          },
 '1472' : { name: 'NewsID', type: 'string' },
 '1473' : { name: 'NewsCategory', type: 'int',
            enums: {
              '0' : 'COMPANY_NEWS',
              '1' : 'MARKETPLACE_NEWS',
              '2' : 'FINANCIAL_MARKET_NEWS',
              '3' : 'TECHNICAL_NEWS',
              '99' : 'OTHER_NEWS'
            }
          },
 '1474' : { name: 'LanguageCode', type: 'language' },
 '1475' : { name: 'NoNewsRefIDs', type: 'numingroup' },
 '1476' : { name: 'NewsRefID', type: 'string' },
 '1477' : { name: 'NewsRefType', type: 'int',
            enums: {
              '0' : 'REPLACEMENT',
              '1' : 'OTHER_LANGUAGE',
              '2' : 'COMPLIMENTARY'
            }
          },
 '1478' : { name: 'StrikePriceDeterminationMethod', type: 'int',
            enums: {
              '1' : 'FIXED_STRIKE',
              '2' : 'STRIKE_SET_AT_EXPIRATION_TO_UNDERLYING_OR_OTHER_VALUE',
              '3' : 'STRIKE_SET_TO_AVERAGE_OF_UNDERLYING_SETTLEMENT_PRICE_ACROSS_THE_LIFE_OF_THE_OPTION',
              '4' : 'STRIKE_SET_TO_OPTIMAL_VALUE'
            }
          },
 '1479' : { name: 'StrikePriceBoundaryMethod', type: 'int',
            enums: {
              '1' : 'LESS_THAN_UNDERLYING_PRICE_IS_IN_THE_MONEY',
              '2' : 'LESS_THAN_OR_EQUAL_TO_THE_UNDERLYING_PRICE_IS_IN_THE_MONEY',
              '3' : 'EQUAL_TO_THE_UNDERLYING_PRICE_IS_IN_THE_MONEY',
              '4' : 'GREATER_THAN_OR_EQUAL_TO_UNDERLYING_PRICE_IS_IN_THE_MONEY',
              '5' : 'GREATER_THAN_UNDERLYING_IS_IN_THE_MONEY'
            }
          },
 '1480' : { name: 'StrikePriceBoundaryPrecision', type: 'percentage' },
 '1481' : { name: 'UnderlyingPriceDeterminationMethod', type: 'int',
            enums: {
              '1' : 'REGULAR',
              '2' : 'SPECIAL_REFERENCE',
              '3' : 'OPTIMAL_VALUE',
              '4' : 'AVERAGE_VALUE'
            }
          },
 '1482' : { name: 'OptPayoutType', type: 'int',
            enums: {
              '1' : 'VANILLA',
              '2' : 'CAPPED',
              '3' : 'BINARY'
            }
          },
 '1483' : { name: 'NoComplexEvents', type: 'numingroup' },
 '1484' : { name: 'ComplexEventType', type: 'int',
            enums: {
              '1' : 'CAPPED',
              '2' : 'TRIGGER',
              '3' : 'KNOCK_IN_UP',
              '4' : 'KOCK_IN_DOWN',
              '5' : 'KNOCK_OUT_UP',
              '6' : 'KNOCK_OUT_DOWN',
              '7' : 'UNDERLYING',
              '8' : 'RESET_BARRIER',
              '9' : 'ROLLING_BARRIER'
            }
          },
 '1485' : { name: 'ComplexOptPayoutAmount', type: 'amt' },
 '1486' : { name: 'ComplexEventPrice', type: 'price' },
 '1487' : { name: 'ComplexEventPriceBoundaryMethod', type: 'int',
            enums: {
              '1' : 'LESS_THAN_COMPLEXEVENTPRICE',
              '2' : 'LESS_THAN_OR_EQUAL_TO_COMPLEXEVENTPRICE',
              '3' : 'EQUAL_TO_COMPLEXEVENTPRICE',
              '4' : 'GREATER_THAN_OR_EQUAL_TO_COMPLEXEVENTPRICE',
              '5' : 'GREATER_THAN_COMPLEXEVENTPRICE'
            }
          },
 '1488' : { name: 'ComplexEventPriceBoundaryPrecision', type: 'percentage' },
 '1489' : { name: 'ComplexEventPriceTimeType', type: 'int',
            enums: {
              '1' : 'EXPIRATION',
              '2' : 'IMMEDIATE',
              '3' : 'SPECIFIED_DATE_TIME'
            }
          },
 '1490' : { name: 'ComplexEventCondition', type: 'int',
            enums: {
              '1' : 'AND',
              '2' : 'OR'
            }
          },
 '1491' : { name: 'NoComplexEventDates', type: 'numingroup' },
 '1492' : { name: 'ComplexEventStartDate', type: 'utctimestamp' },
 '1493' : { name: 'ComplexEventEndDate', type: 'utctimestamp' },
 '1494' : { name: 'NoComplexEventTimes', type: 'numingroup' },
 '1495' : { name: 'ComplexEventStartTime', type: 'utctimeonly' },
 '1496' : { name: 'ComplexEventEndTime', type: 'utctimeonly' },
 '1497' : { name: 'StreamAsgnReqID', type: 'string' },
 '1498' : { name: 'StreamAsgnReqType', type: 'int',
            enums: {
              '1' : 'STREAM_ASSIGNMENT_FOR_NEW_CUSTOMER',
              '2' : 'STREAM_ASSIGNMENT_FOR_EXISTING_CUSTOMER'
            }
          },
 '1499' : { name: 'NoAsgnReqs', type: 'numingroup' },
 '1500' : { name: 'MDStreamID', type: 'string' },
 '1501' : { name: 'StreamAsgnRptID', type: 'string' },
 '1502' : { name: 'StreamAsgnRejReason', type: 'int',
            enums: {
              '0' : 'UNKNOWN_CLIENT',
              '1' : 'EXCEEDS_MAXIMUM_SIZE',
              '2' : 'UNKNOWN_OR_INVALID_CURRENCY_PAIR',
              '3' : 'NO_AVAILABLE_STREAM',
              '99' : 'OTHER'
            }
          },
 '1503' : { name: 'StreamAsgnAckType', type: 'int',
            enums: {
              '0' : 'ASSIGNMENT_ACCEPTED',
              '1' : 'ASSIGNMENT_REJECTED'
            }
          },
 '1504' : { name: 'RelSymTransactTime', type: 'utctimestamp' },
 '1617' : { name: 'StreamAsgnType', type: 'int',
            enums: {
              '1' : 'ASSIGNMENT',
              '2' : 'REJECTED',
              '3' : 'TERMINATE_UNASSIGN'
            }
          },
}
  };
