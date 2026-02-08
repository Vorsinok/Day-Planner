import { useTheme } from '@/src/shared/hooks/useTheme';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { createCalendarStyles } from './CalendarTab.styles';

interface DayItem {
  date: Date;
  isCurrentMonth: boolean;
}

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const generateCalendar = (year: number, month: number): DayItem[] => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonthDays = new Date(year, month, 0).getDate();

  const calendar: DayItem[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    calendar.push({
      date: new Date(year, month - 1, prevMonthDays - i),
      isCurrentMonth: false,
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push({
      date: new Date(year, month, i),
      isCurrentMonth: true,
    });
  }

  let nextDay = 1;
  while (calendar.length < 42) {
    calendar.push({
      date: new Date(year, month + 1, nextDay++),
      isCurrentMonth: false,
    });
  }

  return calendar;
};

export const CalendarTab: React.FC = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation('calendar');

  const locale = i18n.language;

  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [selectedDate, setSelectedDate] = useState<Date>(today);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const calendarDays = useMemo(() => generateCalendar(year, month), [year, month]);

  const styles = useMemo(() => createCalendarStyles(theme), [theme]);

  const weekDays = useMemo(() => [
    t('week.sun'),
    t('week.mon'),
    t('week.tue'),
    t('week.wed'),
    t('week.thu'),
    t('week.fri'),
    t('week.sat'),
  ], [t]);

  const goPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const renderDay = ({ item }: { item: DayItem }) => {
    const isSelected =
      item.date.toDateString() === selectedDate.toDateString();

    return (
      <TouchableOpacity
        style={[
          styles.day,
          !item.isCurrentMonth && styles.otherMonth,
          isSelected && styles.selectedDay,
        ]}
        onPress={() => setSelectedDate(item.date)}
      >
        <Text style={styles.dayText}>{item.date.getDate()}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goPrevMonth}>
          <Text style={styles.nav}>{'<'}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          {currentDate.toLocaleString(locale, { month: 'long' })} {year}
        </Text>

        <TouchableOpacity onPress={goNextMonth}>
          <Text style={styles.nav}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.weekRow}>
        {weekDays.map((d) => (
          <Text key={d} style={styles.weekText}>
            {d}
          </Text>
        ))}
      </View>

      <FlatList
        data={calendarDays}
        renderItem={renderDay}
        keyExtractor={(item) => item.date.toISOString()}
        numColumns={7}
        scrollEnabled={false}
      />

      <View style={styles.selectedContainer}>
        <Text style={styles.selectedText}>
          {t('selected')}: {selectedDate.toLocaleDateString(locale)}
        </Text>
      </View>
    </View>
  );
};

export default CalendarTab;