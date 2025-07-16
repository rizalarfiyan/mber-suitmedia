import { DEFAULT_DATE_FORMAT } from '@/constants'
import dayjs from 'dayjs'
import type { ConfigType } from 'dayjs'

export const dateFormat = (date: ConfigType, format = DEFAULT_DATE_FORMAT): string => {
  if (!date) return '-'
  const newDate = dayjs(date)
  if (!newDate.isValid()) return '-'
  return newDate.format(format)
}
