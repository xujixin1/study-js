'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '自我介绍'
    }, _this.data = {
      age: 20,
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onTap',
    value: function onTap() {
      var self = this;
      self.age++;
    }
  }, {
    key: 'formSubmit',
    value: function formSubmit(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }
  }, {
    key: 'formReset',
    value: function formReset() {
      console.log('form发生了reset事件');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImFnZSIsIml0ZW1zIiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsInNlbGYiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDaUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ0hDLDhCQUF3QjtBQURyQixLLFFBR0xDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsYUFBTyxDQUVMLEVBQUNDLE1BQU0sS0FBUCxFQUFjQyxPQUFPLElBQXJCLEVBRkssRUFHTCxFQUFDRCxNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQUEyQkMsU0FBUyxNQUFwQyxFQUhLLEVBSUwsRUFBQ0YsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFKSyxFQUtMLEVBQUNELE1BQU0sS0FBUCxFQUFjQyxPQUFPLElBQXJCLEVBTEssRUFNTCxFQUFDRCxNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQU5LLEVBT0wsRUFBQ0QsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFQSztBQUZGLEs7Ozs7OzRCQVlDO0FBQ04sVUFBSUUsT0FBTyxJQUFYO0FBQ0FBLFdBQUtMLEdBQUw7QUFDRDs7OytCQUNVTSxDLEVBQUc7QUFDWkMsY0FBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDRixFQUFFRyxNQUFGLENBQVNOLEtBQS9DO0FBQ0Q7OztnQ0FDVztBQUNWSSxjQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDRDs7OzZCQUNRLENBQUU7Ozs7RUExQmtCLGVBQUtFLEk7O2tCQUFuQmQsSyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Ieq5oiR5LuL57uNJ1xuICAgICAgfVxuICAgICAgZGF0YSA9IHtcbiAgICAgICAgYWdlOiAyMCxcbiAgICAgICAgaXRlbXM6IFtcblxuICAgICAgICAgIHtuYW1lOiAnVVNBJywgdmFsdWU6ICfnvo7lm70nfSxcbiAgICAgICAgICB7bmFtZTogJ0NITicsIHZhbHVlOiAn5Lit5Zu9JywgY2hlY2tlZDogJ3RydWUnfSxcbiAgICAgICAgICB7bmFtZTogJ0JSQScsIHZhbHVlOiAn5be06KW/J30sXG4gICAgICAgICAge25hbWU6ICdKUE4nLCB2YWx1ZTogJ+aXpeacrCd9LFxuICAgICAgICAgIHtuYW1lOiAnRU5HJywgdmFsdWU6ICfoi7Hlm70nfSxcbiAgICAgICAgICB7bmFtZTogJ1RVUicsIHZhbHVlOiAn5rOV5Zu9J31cbiAgICAgICAgXVxuICAgICAgfVxuICAgICAgb25UYXAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLmFnZSsrXG4gICAgICB9XG4gICAgICBmb3JtU3VibWl0KGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGZvcm1SZXNldCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZyZXNldOS6i+S7ticpXG4gICAgICB9XG4gICAgICBvbkxvYWQoKSB7fVxuICAgIH1cbiJdfQ==