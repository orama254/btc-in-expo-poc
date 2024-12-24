import { Pressable, Text } from 'react-native';
import { styles } from '../styles';


type ButtonProps = {
    title: string;
    onPress: () => void;
    style?: object;
};



const Button = ({ title, onPress, ...props }: ButtonProps) => {
    return (
        <Pressable style={[styles.btn, props.style]} onPress={onPress}>
            <Text style={styles.btnText}>
                {title}
            </Text>
        </Pressable>
    );
};

export default Button;