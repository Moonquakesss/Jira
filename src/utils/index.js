import { useEffect, useState } from "react";

// 排除值为0，转换为boolean为false的情况
export const isFalsey = (value) => (value === 0 ? false : !value);

// 拷贝后修改，因为在一个函数中，改变传入的对象本身是不好的
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    if (isFalsey(result[key])) {
      delete result[key];
    }
    return result[key];
  });
  return result;
};

// custom hook debounce
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // 执行当前effect时，对上一个effect进行清除
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
