import { PaperProvider } from "react-native-paper";
import NavigateApp from "../routes/NavigateApp";
import { themeData } from "../data/theme/ThemeData";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Main = () => {
    return (
        <PaperProvider
            theme={themeData}
            settings={
                {
                    icon: props => <Icon {...props} />,
                }
            }
        >
            <NavigateApp />
        </PaperProvider>
    );
}
export default Main