import React, { useState } from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';

import { DescriptorSecretKey, Mnemonic, Blockchain, Wallet, DatabaseConfig, Descriptor } from 'bdk-rn';
import { WordCount, Network, KeychainKind } from 'bdk-rn/lib/lib/enums';




import { styles } from "@/styles";
import Button from "@/components/Button";

import FontAwesome5 from'@expo/vector-icons/FontAwesome5';

export default function Index() {

  const [seedPharse, setSeedPharse] = useState<string | undefined>('');
  const [displayResponseText, setDisplayResponseText] = useState<string | undefined>('');
  const [loading, setLoading] = useState<boolean>(false);

  const generateMnemonic = async () => {
    try {
      setLoading(true);
      const mnemonic = await new Mnemonic().create()
      console.log(mnemonic.asString())
      setSeedPharse(mnemonic.asString());
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        setDisplayResponseText(error.message);
      } else {
        setDisplayResponseText(String(error));
      }
    }

   
    

    // setSeedPharse(mnemonic.toString())
    // setDisplayResponseText(mnemonic.toString())

  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
        >
          <View style={styles.headerSection}>
            <FontAwesome5 name="bitcoin" size={24} color="#F7931A" />
            <Text style={styles.headerText}>Welcome to BTC-RN Power App</Text>
            <FontAwesome5 name="bitcoin" size={24} color="#F7931A" />
          </View>

          {
            displayResponseText && (
              <View style={styles.responseSection}>
                <Text style={styles.responseText} selectable>
                  Response:
                </Text>
                <Text selectable>{displayResponseText}</Text>
              </View>
            )
          }


          <View style={styles.methodSection}>
            <Button 
              title="Generate Mnemonic" 
              style={styles.methodButton}
              onPress={generateMnemonic} 
            />
          </View>

      </ScrollView>
    </SafeAreaView>
  );
}
