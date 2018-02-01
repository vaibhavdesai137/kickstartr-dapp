'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaidesai/Development/git/vaibhavdesai137/kickstartr-dapp/components/SpendingRequestRow.js';


var SpendingRequestRow = function (_Component) {
    (0, _inherits3.default)(SpendingRequestRow, _Component);

    function SpendingRequestRow() {
        (0, _classCallCheck3.default)(this, SpendingRequestRow);

        return (0, _possibleConstructorReturn3.default)(this, (SpendingRequestRow.__proto__ || (0, _getPrototypeOf2.default)(SpendingRequestRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(SpendingRequestRow, [{
        key: 'approveSpendingRequest',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaignInstance, accounts, receipt;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _context.prev = 1;
                                campaignInstance = (0, _campaign2.default)(this.props.address);
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return campaignInstance.methods.approveSpendingRequest(this.props.id).send({
                                    from: accounts[0]
                                });

                            case 8:
                                receipt = _context.sent;

                                _routes.Router.replaceRoute('/campaigns/' + this.props.address + '/spendingRequests');
                                _context.next = 14;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](1);

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 12]]);
            }));

            function approveSpendingRequest() {
                return _ref.apply(this, arguments);
            }

            return approveSpendingRequest;
        }()
    }, {
        key: 'finalizeSpendingRequest',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var campaignInstance, accounts, receipt;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                event.preventDefault();

                                _context2.prev = 1;
                                campaignInstance = (0, _campaign2.default)(this.props.address);
                                _context2.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context2.sent;
                                _context2.next = 8;
                                return campaignInstance.methods.finalizeSpendingRequest(this.props.id).send({
                                    from: accounts[0]
                                });

                            case 8:
                                receipt = _context2.sent;

                                _routes.Router.replaceRoute('/campaigns/' + this.props.address + '/spendingRequests');
                                _context2.next = 14;
                                break;

                            case 12:
                                _context2.prev = 12;
                                _context2.t0 = _context2['catch'](1);

                            case 14:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[1, 12]]);
            }));

            function finalizeSpendingRequest() {
                return _ref2.apply(this, arguments);
            }

            return finalizeSpendingRequest;
        }()
    }, {
        key: 'render',
        value: function render() {

            var spendingRequest = this.props.spendingRequest;
            var readyToFinalize = spendingRequest.approversCount > this.props.contributorsCount / 2;

            return _react2.default.createElement(_semanticUiReact.Table.Row, { disabled: spendingRequest.complete, positive: readyToFinalize && !spendingRequest.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, this.props.id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, spendingRequest.desc), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _web2.default.utils.fromWei(spendingRequest.amount, 'ether') + ' ETH'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, spendingRequest.recipient), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, spendingRequest.approversCount, ' / ', this.props.contributorsCount), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, spendingRequest.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true,
                onClick: this.approveSpendingRequest.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Approve')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, spendingRequest.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', basic: true,
                onClick: this.finalizeSpendingRequest.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Finalize')));
        }
    }]);

    return SpendingRequestRow;
}(_react.Component);

exports.default = SpendingRequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3BlbmRpbmdSZXF1ZXN0Um93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiRm9ybSIsIlRhYmxlIiwiSW5wdXQiLCJCdXR0b24iLCJNZXNzYWdlIiwiQ2FtcGFpZ25GZXRjaGVyIiwid2ViMyIsIlJvdXRlciIsIlNwZW5kaW5nUmVxdWVzdFJvdyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbkluc3RhbmNlIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlU3BlbmRpbmdSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsInJlY2VpcHQiLCJyZXBsYWNlUm91dGUiLCJmaW5hbGl6ZVNwZW5kaW5nUmVxdWVzdCIsInNwZW5kaW5nUmVxdWVzdCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmVyc0NvdW50IiwiY29udHJpYnV0b3JzQ291bnQiLCJjb21wbGV0ZSIsImRlc2MiLCJ1dGlscyIsImZyb21XZWkiLCJhbW91bnQiLCJyZWNpcGllbnQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFNLEFBQU8sQUFBTyxBQUFROztBQUM3QyxBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBR0U7c0NBQUEsQUFBTTs7Z0RBR0k7QSxtREFBbUIsd0JBQWdCLEtBQUEsQUFBSyxNLEFBQXJCLEFBQTJCOzt1Q0FDN0IsY0FBQSxBQUFLLEksQUFBTCxBQUFTOztpQ0FBMUI7QTs7d0RBQ2dCLEFBQWlCLFFBQWpCLEFBQXlCLHVCQUF1QixLQUFBLEFBQUssTUFBckQsQUFBMkQsSUFBM0QsQUFBK0Q7MENBQzNFLFNBRFksQUFBb0UsQUFDaEYsQUFBUyxBO0FBRHVFLEFBQ3RGLGlDQURrQjs7aUNBQWhCO0EsbURBR047OytDQUFBLEFBQU8sYUFBYSxnQkFBZ0IsS0FBQSxBQUFLLE1BQXJCLEFBQTJCLFVBQS9DLEFBQXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBSzdEO3NDQUFBLEFBQU07O2lEQUdJO0EsbURBQW1CLHdCQUFnQixLQUFBLEFBQUssTUFBckIsQSxBQUEyQjs7dUNBQzdCLGNBQUEsQUFBSyxJQUFMLEFBQVMsQTs7aUNBQTFCO0E7O3dEQUNnQixBQUFpQixRQUFqQixBQUF5Qix3QkFBd0IsS0FBQSxBQUFLLE1BQXRELEFBQTRELElBQTVELEFBQWdFOzBDQUM1RSxTQURZLEFBQXFFLEFBQ2pGLEFBQVMsQTtBQUR3RSxBQUN2RixpQ0FEa0I7O2lDQUFoQjtBLG9EQUdOOzsrQ0FBQSxBQUFPLGFBQWEsZ0JBQWdCLEtBQUEsQUFBSyxNQUFyQixBQUEyQixVQUEvQyxBQUF5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUl4RCxBQUVMOztnQkFBTSxrQkFBa0IsS0FBQSxBQUFLLE1BQTdCLEFBQW1DLEFBQ25DO2dCQUFNLGtCQUFrQixnQkFBQSxBQUFnQixpQkFBa0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxvQkFBckUsQUFBeUYsQUFFekY7O21DQUNLLGNBQUQsdUJBQUEsQUFBTyxPQUFJLFVBQVUsZ0JBQXJCLEFBQXFDLFVBQVUsVUFBVSxtQkFBbUIsQ0FBQyxnQkFBN0UsQUFBNkY7OEJBQTdGO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUR0QixBQUNJLEFBQXdCLEFBQ3hCLHFCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFBYTtBQUFiO0FBQUEsK0JBRkosQUFFSSxBQUE2QixBQUM3Qix1QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQWE7QUFBYjtBQUFBLDZCQUFhLEFBQUssTUFBTCxBQUFXLFFBQVEsZ0JBQW5CLEFBQW1DLFFBQW5DLEFBQTJDLFdBSDVELEFBR0ksQUFBbUUsQUFDbkUseUJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUFhO0FBQWI7QUFBQSwrQkFKSixBQUlJLEFBQTZCLEFBQzdCLDRCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSztBQURMO0FBQUEsK0JBQUEsQUFDcUIsZ0JBQW1CLFlBQUEsQUFBSyxNQU5qRCxBQUtJLEFBQ21ELEFBRW5ELG9DQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSztBQURMO0FBQUEsK0JBQ0ssQUFBZ0IsV0FBaEIsQUFBMkIsdUJBQ3hCLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsT0FBdEIsQUFDSTt5QkFBUyxLQUFBLEFBQUssdUJBQUwsQUFBNEIsS0FEekMsQUFDYSxBQUFpQzs4QkFEOUM7Z0NBQUE7QUFBQTthQUFBLEVBVlosQUFRSSxBQUVRLEFBTVIsNkJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNLO0FBREw7QUFBQSwrQkFDSyxBQUFnQixXQUFoQixBQUEyQix1QkFDeEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixBQUNJO3lCQUFTLEtBQUEsQUFBSyx3QkFBTCxBQUE2QixLQUQxQyxBQUNhLEFBQWtDOzhCQUQvQztnQ0FBQTtBQUFBO2FBQUEsRUFuQmhCLEFBQ0ksQUFnQkksQUFFUSxBQVFuQjs7Ozs7QUE1RDRCLEEsQUErRGpDOztrQkFBQSxBQUFlIiwiZmlsZSI6IlNwZW5kaW5nUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmFpZGVzYWkvRGV2ZWxvcG1lbnQvZ2l0L3ZhaWJoYXZkZXNhaTEzNy9raWNrc3RhcnRyLWRhcHAifQ==