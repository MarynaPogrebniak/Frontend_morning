import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { onClickCategory } from "../redux/slices/filterSlice";

const Search: React.FC = () => {

  const [localValue, setLocalValue] = useState<string>("");
  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  // Хук useRef один из методов, который предоставляет
  // React для получения ссылки на JSX.Element
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent <HTMLInputElement>) => {
    setLocalValue(e.target.value);
    dispatch(onClickCategory(0))

  };

  const onClickClear = () => {
    setLocalValue('');
    // один из классических примеров использования useRef
    // С помощью ссылки на input элемент мы установили
    // фокус на нем
    inputRef.current?.focus();
  }

  return (
    <div>
      <button></button>
      <input
      type="text"
      placeholder="Поиск товара..."
      // в атрибуте ref передаем то, что получили из хука useref
     // в этом месте происходит связка между ссылкой (зук useREf и элементом)
     // в нашем случае это input
      ref = {inputRef}
      // сработает, когда элемент будет в фокусе
      onFocus={() => setIsFocus(true)}
      // сработает, когда элемент будет не в фокусе
      onBlur={() => setIsFocus(false)}
      onChange={onChange}
      value={localValue}
      />
      <button
        onClick={onClickClear}>
      </button>
    </div>
  );
};

export default Search;
