import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [Faceid, AnimatedFaceid] = createIcon({
  name: 'Faceid',
  getIcon: (props) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M1 7C1 7.55228 1.44772 8 2 8C2.55228 8 3 7.55228 3 7H1ZM7 3C7.55228 3 8 2.55228 8 2C8 1.44772 7.55228 1 7 1V3ZM21 7C21 7.55228 21.4477 8 22 8C22.5523 8 23 7.55228 23 7H21ZM17 1C16.4477 1 16 1.44772 16 2C16 2.55228 16.4477 3 17 3V1ZM8.5 8C8.5 7.44772 8.05228 7 7.5 7C6.94772 7 6.5 7.44772 6.5 8H8.5ZM6.5 9.5C6.5 10.0523 6.94772 10.5 7.5 10.5C8.05228 10.5 8.5 10.0523 8.5 9.5H6.5ZM17.5 8C17.5 7.44772 17.0523 7 16.5 7C15.9477 7 15.5 7.44772 15.5 8H17.5ZM15.5 9.5C15.5 10.0523 15.9477 10.5 16.5 10.5C17.0523 10.5 17.5 10.0523 17.5 9.5H15.5ZM13.25 8C13.25 7.44772 12.8023 7 12.25 7C11.6977 7 11.25 7.44772 11.25 8H13.25ZM10.75 11.75C10.1977 11.75 9.75 12.1977 9.75 12.75C9.75 13.3023 10.1977 13.75 10.75 13.75V11.75ZM8.68232 14.7689C8.27857 14.3921 7.64578 14.4139 7.26894 14.8177C6.89211 15.2214 6.91393 15.8542 7.31768 16.2311L8.68232 14.7689ZM16.6823 16.2311C17.0861 15.8542 17.1079 15.2214 16.7311 14.8177C16.3542 14.4139 15.7214 14.3921 15.3177 14.7689L16.6823 16.2311ZM3 17C3 16.4477 2.55228 16 2 16C1.44772 16 1 16.4477 1 17H3ZM7 23C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21V23ZM23 17C23 16.4477 22.5523 16 22 16C21.4477 16 21 16.4477 21 17H23ZM17 21C16.4477 21 16 21.4477 16 22C16 22.5523 16.4477 23 17 23V21ZM3 7V4H1V7H3ZM4 3H7V1H4V3ZM3 4C3 3.44772 3.44772 3 4 3V1C2.34315 1 1 2.34315 1 4H3ZM23 7V4H21V7H23ZM20 1H17V3H20V1ZM23 4C23 2.34315 21.6569 1 20 1V3C20.5523 3 21 3.44772 21 4H23ZM6.5 8V9.5H8.5V8H6.5ZM15.5 8V9.5H17.5V8H15.5ZM11.25 8V12.25H13.25V8H11.25ZM11.75 11.75H10.75V13.75H11.75V11.75ZM11.25 12.25C11.25 11.9739 11.4739 11.75 11.75 11.75V13.75C12.5784 13.75 13.25 13.0784 13.25 12.25H11.25ZM7.31768 16.2311C8.71559 17.5358 10.325 18.25 12 18.25C13.675 18.25 15.2844 17.5358 16.6823 16.2311L15.3177 14.7689C14.2156 15.7976 13.075 16.25 12 16.25C10.925 16.25 9.78441 15.7976 8.68232 14.7689L7.31768 16.2311ZM1 17V20H3V17H1ZM4 23H7V21H4V23ZM1 20C1 21.6569 2.34315 23 4 23V21C3.44772 21 3 20.5523 3 20H1ZM21 17V20H23V17H21ZM20 21H17V23H20V21ZM21 20C21 20.5523 20.5523 21 20 21V23C21.6569 23 23 21.6569 23 20H21Z"
        fill="currentColor"
      />
    </Svg>
  ),
})
