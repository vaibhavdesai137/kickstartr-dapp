'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _SpendingRequestRow = require('../../../components/SpendingRequestRow');

var _SpendingRequestRow2 = _interopRequireDefault(_SpendingRequestRow);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaidesai/Development/git/vaibhavdesai137/kickstartr-dapp/pages/campaigns/spendingRequests/index.js?entry';


var SpendingRequestIndex = function (_Component) {
    (0, _inherits3.default)(SpendingRequestIndex, _Component);

    function SpendingRequestIndex() {
        (0, _classCallCheck3.default)(this, SpendingRequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (SpendingRequestIndex.__proto__ || (0, _getPrototypeOf2.default)(SpendingRequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(SpendingRequestIndex, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.spendingRequests.map(function (spendingRequest, index) {
                return _react2.default.createElement(_SpendingRequestRow2.default, {
                    key: index,
                    id: index,
                    spendingRequest: spendingRequest,
                    address: _this2.props.address,
                    contributorsCount: _this2.props.contributorsCount, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/spendingRequests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', style: { marginBottom: '20px' }, positive: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'New Spending Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'ID'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Amount'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Approval Count'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Approve?'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Finalize?'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, this.renderRows())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Found ', this.props.spendingRequests.length, ' spending request(s)'));
        }
    }], [{
        key: 'getInitialProps',

        // Used solely by Next.js since componentDidMount() works only with React and not Next
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaignInstance, contributorsCount, spendingRequestsCount, spendingRequests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                // Solidity does not have a way to return an array of structs
                                // So we'll need to get spendingRequests count and make those many individual calls
                                // Using Promise.all(..) to make all calls at once
                                campaignInstance = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaignInstance.methods.contributorsCount().call();

                            case 3:
                                contributorsCount = _context.sent;
                                _context.next = 6;
                                return campaignInstance.methods.spendingRequestsCount().call();

                            case 6:
                                spendingRequestsCount = _context.sent;
                                _context.next = 9;
                                return _promise2.default.all(Array(parseInt(spendingRequestsCount)).fill().map(function (element, index) {
                                    return campaignInstance.methods.spendingRequests(index).call();
                                }));

                            case 9:
                                spendingRequests = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    contributorsCount: contributorsCount,
                                    spendingRequests: spendingRequests
                                });

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return SpendingRequestIndex;
}(_react.Component);

exports.default = SpendingRequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zcGVuZGluZ1JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR3JpZCIsIkJ1dHRvbiIsIlRhYmxlIiwiSWNvbiIsIkxheW91dCIsIkNhbXBhaWduRmV0Y2hlciIsIlNwZW5kaW5nUmVxdWVzdFJvdyIsIkxpbmsiLCJTcGVuZGluZ1JlcXVlc3RJbmRleCIsInByb3BzIiwic3BlbmRpbmdSZXF1ZXN0cyIsIm1hcCIsInNwZW5kaW5nUmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImNvbnRyaWJ1dG9yc0NvdW50IiwibWFyZ2luQm90dG9tIiwicmVuZGVyUm93cyIsImxlbmd0aCIsImNhbXBhaWduSW5zdGFuY2UiLCJxdWVyeSIsIm1ldGhvZHMiLCJjYWxsIiwic3BlbmRpbmdSZXF1ZXN0c0NvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFPLEFBQXdCOzs7O0FBQy9CLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O3FDQTBCVzt5QkFFVDs7d0JBQU8sQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIsSUFBSSxVQUFBLEFBQUMsaUJBQUQsQUFBa0IsT0FBVSxBQUMvRDt1Q0FBTyxBQUFDO3lCQUFELEFBQ0UsQUFDTDt3QkFGRyxBQUVDLEFBQ0o7cUNBSEcsQUFHYyxBQUNqQjs2QkFBUyxPQUFBLEFBQUssTUFKWCxBQUlpQixBQUNwQjt1Q0FBbUIsT0FBQSxBQUFLLE1BTHJCLEFBSzJCO2tDQUwzQjtvQ0FBUCxBQUFPLEFBTVY7QUFOVTtBQUNILGlCQURHO0FBRFgsQUFBTyxBQVFWLGFBUlU7Ozs7aUNBVUYsQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUVJO0FBRko7QUFBQSxhQUFBLGtCQUVJLEFBQUMsOEJBQUssT0FBTyxnQkFBZ0IsS0FBQSxBQUFLLE1BQXJCLEFBQTJCLFVBQXhDLEFBQWtEOzhCQUFsRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLFNBQVEsT0FBTyxFQUFFLGNBQWpDLEFBQStCLEFBQWdCLFVBQVUsVUFBekQsQUFBbUU7OEJBQW5FO2dDQUFBO0FBQUE7ZUFKWixBQUVJLEFBQ0ksQUFDSSxBQU1SLDJDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx1QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxnQ0FBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSwyQkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUpKLEFBSUksQUFDQSw4QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxtQ0FBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQU5KLEFBTUksQUFDQSw2QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQVRaLEFBQ0ksQUFDSSxBQU9JLEFBR1IsZ0NBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkF0QlIsQUFVSSxBQVlJLEFBQ0ssQUFBSyxBQUdkLGdDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFZLGVBQUEsQUFBSyxNQUFMLEFBQVcsaUJBQXZCLEFBQXdDLFFBM0JoRCxBQUNJLEFBMEJJLEFBR1g7OzthQW5FRDs7OztpSEFDNkIsQTs7Ozs7aUNBRXpCOztBQUNBO0FBQ0E7QUFDTTtBLG1EQUFtQix3QkFBZ0IsTUFBQSxBQUFNLE0sQUFBdEIsQUFBNEI7O3VDQUNyQixpQkFBQSxBQUFpQixRQUFqQixBQUF5QixvQkFBekIsQUFBNkMsQTs7aUNBQXZFO0E7O3VDQUM4QixpQkFBQSxBQUFpQixRQUFqQixBQUF5Qix3QkFBekIsQUFBaUQsQTs7aUNBQS9FO0E7O3lEQUN5QixBQUFRLFVBQzdCLFNBQU4sQUFBTSxBQUFTLHdCQUFmLEFBQ0ssT0FETCxBQUVLLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3JCOzJDQUFPLGlCQUFBLEFBQWlCLFFBQWpCLEFBQXlCLGlCQUF6QixBQUEwQyxPQUFqRCxBQUFPLEFBQWlELEFBQzNEO0FBTHNCLEFBQzNCLEEsaUNBQUEsQ0FEMkI7O2lDQUF6QjtBOzs2Q0FTTyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjt1REFGRyxBQUVnQixBQUNuQjtzREFIRyxBQUdlLEE7QUFIZixBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcEJ1QixBLEFBeUVuQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmFpZGVzYWkvRGV2ZWxvcG1lbnQvZ2l0L3ZhaWJoYXZkZXNhaTEzNy9raWNrc3RhcnRyLWRhcHAifQ==