import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { fetchCountries } from '../../utils/api';
import { View } from 'react-native';
import { lightTheme, darkTheme } from '../../utils/colors';
import { styles } from './styles';
import { ThemeContext } from '../../context/ThemeContext';

const CountrySelector = ({ onSelect, task }) => {
  const [countries, setCountries] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const loadCountries = async () => {
      const countryList = await fetchCountries();
      setCountries(countryList);
    };
    loadCountries();
  }, []);

  const memoizedCountries = useMemo(() => countries, [countries]);

  return (
    <View style={[styles.pickerWrapper, { borderColor: theme.pickerBorderColor }]}>
      <Picker
        selectedValue={task?.country}
        onValueChange={(value) => onSelect(value)}
        style={[styles.picker, { backgroundColor: theme.pickerBackground, color: theme.primaryText }]}
        dropdownIconColor={theme.accent}
      >
        <Picker.Item label="Select Country" value="" />
        {memoizedCountries.map((country) => (
          <Picker.Item key={country.code} label={country.name} value={country.name} />
        ))}
      </Picker>
    </View>
  );
};

export default CountrySelector;
