'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FieldSelect = require('./FieldSelect');

var _FieldSelect2 = _interopRequireDefault(_FieldSelect);

var _FieldText = require('./FieldText');

var _FieldText2 = _interopRequireDefault(_FieldText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataField = function (_Component) {
  _inherits(DataField, _Component);

  function DataField(props) {
    _classCallCheck(this, DataField);

    var _this = _possibleConstructorReturn(this, (DataField.__proto__ || Object.getPrototypeOf(DataField)).call(this, props));

    _this.state = {
      _meta: props._meta || props._obj._metadata(props._fld)
    };
    return _this;
  }

  _createClass(DataField, [{
    key: 'render',
    value: function render() {
      var $p = this.context.$p;
      var _meta = this.state._meta;
      var _props = this.props;
      var _obj = _props._obj;
      var _fld = _props._fld;
      var handleValueChange = _props.handleValueChange;

      var _val = _obj[_fld];
      var subProps = {
        _meta: _meta,
        _obj: _obj,
        _fld: _fld,
        _val: _val,
        handleValueChange: handleValueChange
      };

      switch ($p.rx_control_by_type(this.state._meta.type, _val)) {

        case 'ocombo':
          return _react2.default.createElement(_FieldSelect2.default, subProps);

        default:
          return _react2.default.createElement(_FieldText2.default, subProps);

      }

      ;
    }
  }]);

  return DataField;
}(_react.Component);

DataField.contextTypes = {
  $p: _react2.default.PropTypes.object.isRequired
};
DataField.propTypes = {
  _obj: _react.PropTypes.object.isRequired,
  _fld: _react.PropTypes.string.isRequired,
  _meta: _react.PropTypes.object,
  handleValueChange: _react.PropTypes.func
};
DataField.labelPosition = {
  auto: 'auto',
  hide: 'hide',
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom'
};
DataField.fieldKind = {
  input: 'input', // поле ввода
  label: 'label', // поле надписи
  toggle: 'toggle', // поле переключателя
  image: 'image', // поле картинки
  text: 'text' // многострочный редактор текста
};
exports.default = DataField;