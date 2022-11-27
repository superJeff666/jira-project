import { useEffect, useRef, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// 自定义hook --- 防抖
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次在value变化之后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

// 自定义Array hook, 实现数组的增加，删除某项以及删除所有项
// export const useArray = <T>(initialArray:T[]) => {
//   const [value, setValue] = useState(initialArray);
//   return {
//     value,
//     setValue,
//     add: (item:T) => setValue([...value, item]),
//     clear: () => setValue([]),
//     removeIndex: (index:number) => {
//       const copy = [...value];
//       copy.splice(index,1);
//       setValue(copy)
//     }
//   }
// }

// 文档标题hooks
export const useDocumentTitle = (
  title: string,
  keepOnUnmount: boolean = true
) => {
  const oldTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        // 如果不指定依赖，读到的就是旧的title
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};
