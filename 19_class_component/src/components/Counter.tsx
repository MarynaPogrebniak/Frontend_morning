import { count } from "console";
import React from "react";

// описываем interface state компонента
interface ICounterState {
  count: number;
  // title: string
}

interface ICounterProps {
    initialValue: number
}

// создали и типизировали классовый компонент
// классовый компонент - альтернатива для работы с компонентами
// функционал компоненту
// имеет больше возможностей, но более ресурсозатратный для приложения
class Counter extends React.Component<ICounterProps /* initialValue: number */, ICounterState> {
  // в классовом компоненте обязательно прописывается конструктор,
  // который позволяет в дальнейшем работать с props(данными, полученными от родительского компонента)
  constructor(props: ICounterProps) {
    // создали состояние компонента, в котором хранятся ключевые данные,
    // за изменениями которых react необходимо следить
    super(props);
    this.state = {
      count: props.initialValue,
      // title: ''
    }
  }

  decrement = (): void => {
    // изменять state можно только с помощью метода setState() !!!
    this.setState((prev) => ({
      // перед первым кликом prev = {count: 0}
      count: prev.count - 1,
    }));
  };

  // это некорректная запись! Нельзя изменять state напрямую!!
  // this.state = {
  //     count: ProgressEvent.count -1
  // }

  increment = (): void => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  // componentDidMount() будет запущена, когда компонент будет смонтирован(помещен в дом дерево)
  componentDidMount(): void {
      console.log(' Компонент смонтирован');
  }

    // componentDidUpdate() будет запущена, когда компонент будет обновлен (например, с помощью хука useState)
    componentDidUpdate(prevProps: Readonly<ICounterProps>, prevState: Readonly<ICounterState>, snapshot?: any): void {
      console.log("Компонент обновлен");
  }

      // componentWillUnmount() будет запущена, перед размонтированием (удалением из дом дерева)
  componentWillUnmount(): void {
      console.log("Компонент будет удален");
  }

  // в методе render(), после ключевого слова return начинается
  // JSX синтаксис, где мы описываем верстку компонента(полный аналог того, что в FC функционал компоненте пишется после
  // ключевого слова return)
  render() {
    return (
      <>
        <h2>Counter App</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span> {this.state.count} </span>
          <button onClick={this.increment}>+</button>
        </div>
      </>
    );
  }
}

export default Counter;
