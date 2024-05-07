
import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import { ColorCode } from '../data/theme/ColorCode';
import { transactions } from '../data/models/TransactionData';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/NavigateApp';

const { width, height } = Dimensions.get('window');

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
function Home({ navigation }: HomeProps): React.JSX.Element {
  const { colors } = useTheme()

  const backgroundStyle = {
    backgroundColor: colors.background,
  };

  const MonthList = () => {
    return (
      <View style={styles.monthListStyle}>
        <Icon name='calendar' color={colors.primary} size={26} style={{ borderColor: ColorCode.black, borderWidth: 1, padding: 8, width: 42, borderRadius: 12, marginRight: 8 }}></Icon>
        <Text variant='titleMedium' style={{ borderColor: ColorCode.black, borderWidth: 1, padding: 8, borderRadius: 12, marginRight: 8, justifyContent: 'center' }}>All Transaction</Text>
        <Text variant='titleMedium' style={{ borderColor: ColorCode.black, borderWidth: 1, padding: 8, borderRadius: 12, marginRight: 8, justifyContent: 'center', backgroundColor: colors.primary, color: ColorCode.white }}>December 2024</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={colors.primary}
      />
      <View style={styles.container}>
        <BackHeader />
        <MonthList />
        <ListView />
        <TopHeader />
        <ButtonRow
          addExpense={() => { navigation.push('AddExpense') }}
          addIncome={() => { navigation.push('AddIncome') }}
        />
      </View>
    </SafeAreaView>
  );
}

const BackHeader = () => {
  const { colors } = useTheme()
  return (
    <View style={[styles.headerBackground, { backgroundColor: colors.primary }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 16 }}>
        <View>
          <Text variant='titleLarge' style={{ color: ColorCode.white }}>Hello</Text>
          <Text variant='titleLarge' style={{ color: ColorCode.white }}>Navaghan</Text>
        </View>
        <Icon name='user' color={colors.surface} size={32}></Icon>
      </View>
    </View>
  )
}

const TopHeader = () => {
  const { colors } = useTheme()
  return (
    <View style={[styles.headerContainer, { backgroundColor: colors.surface, }]}>
      <View style={{ alignItems: 'center' }}>
        <Text variant='titleMedium' style={{ color: 'black' }}>Available Balance</Text>
        <Text variant='titleLarge' style={{ color: colors.primary, marginTop: 4 }}>1000</Text>
      </View>
      <View style={{ flexDirection: 'row', width: width - 64, alignItems: 'center', justifyContent: 'space-around', }}>
        <View style={{ alignItems: 'center' }}>
          <Text variant='titleMedium' style={{ color: 'black' }}>Income</Text>
          <Text variant='titleMedium' style={{ color: ColorCode.green, marginTop: 4 }}>1000</Text>
        </View>
        <View style={styles.verticleLine}></View>
        <View style={{ alignItems: 'center' }}>
          <Text variant='titleMedium' style={{ color: 'black' }}>Expense</Text>
          <Text variant='titleMedium' style={{ color: ColorCode.red, marginTop: 4 }}>1000</Text>
        </View>
      </View>
    </View>
  )
}

const ListView = () => {
  return (
    <FlatList
      data={transactions}
      renderItem={({ item, index }) => {
        return (
          <View key={index} style={styles.transactionCard}>
            <View>
              <Text variant='titleLarge' >{item.title}</Text>
              <Text variant='titleMedium' style={{ color: ColorCode.grey, }}>{item.date}</Text>
            </View>
            <Text variant='titleMedium' style={{ color: ColorCode.red, marginTop: 4 }}>{item.amount}</Text>
          </View>
        )
      }}

    ></FlatList>
  )
}

const ButtonRow = ({ addIncome, addExpense }: { addIncome: () => void, addExpense: () => void }) => {
  return (
    <View style={{ marginHorizontal: 16, marginBottom: 32, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity
        style={[styles.btnStyle, { backgroundColor: ColorCode.green }]}
        onPress={addIncome}
      >
        <Text variant='titleLarge' style={{ color: ColorCode.white }}>Income</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btnStyle, { backgroundColor: ColorCode.red }]}
        onPress={addExpense}
      >
        <Text variant='titleLarge' style={{ color: ColorCode.white }}>Expense</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  transactionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    alignItems: 'center',
    elevation: 4,
    backgroundColor: ColorCode.surface,
    borderRadius: 12,
  },
  headerBackground: {
    backgroundColor: 'red',
    position: 'relative',
    height: 150,
    borderBottomEndRadius: 12,
    borderBottomLeftRadius: 12
  },
  verticleLine: {
    height: '90%',
    width: 1,
    backgroundColor: '#909090',
  },
  btnStyle: {
    width: width * 0.4,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    position: 'absolute',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    elevation: 4,
    alignItems: 'center',
    height: 150,
    margin: 16,
    top: 80,
    left: 0,
    right: 0
  },
  monthListStyle: {
    flexDirection: 'row',
    marginTop: 108,
    marginVertical: 8,
    marginHorizontal: 16
  }
});

export default Home;
