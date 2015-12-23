import { Styles, Utils } from 'material-ui'
const { Colors, Spacing } = Styles
const { ColorManipulator } = Utils

export default {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.blue700,
    primary2Color: Colors.blue900,
    primary3Color: Colors.grey400,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.blue700,
    clockCircleColor: ColorManipulator.fade(Colors.darkBlack, 0.07),
  }
}
