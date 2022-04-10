class Otoshidama extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: "",
                    money: 0
                }
            ]
        };
        this.add = this.add.bind(this);
        this.setname = this.setname.bind(this);
        this.setmoney = this.setmoney.bind(this);
    }
    add = () => {
        this.state.list.push({
            name: "",
            money: 0
        });
        this.setState({
            list: this.state.list
        });
        this.sum();
    }

    render = () => {
        // console.log("start");
        // console.log(this.state.list);
        return (
            <span>
                <div className="row">
                    <div className="col-12 mt-5 text-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="currentColor" className="bi bi-patch-check" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            <path d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                        </svg><b />
                        <div className="col-6 offset-6 text-right">
                            <svg id="plus" onClick={this.add} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>
                        合計金額：<span id="sum"></span>
                    </div>
                </div>
                <div className="row mx-auto" id="view">
                    {this.state.list.map((list, i) => {
                        return <div className="col-12">
                            <div className="form-row">
                                <div className="col-6">
                                    <label>氏名</label>
                                    <input className="form-control" type="text"  onChange={this.setname} data-no={i} name="name" value={list.name} />
                                </div>
                                <div className="col-6">
                                    <label>金額[半角数字]</label>
                                    <input className="form-control money" onChange={this.setmoney} data-no={i} type="number" pattern="\d*" name="money" value={list.money} />
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </span>
        );
    }
    setname = (e) =>{
        // console.log(e);
        this.setState(
            {
                list: ((e) => {
                    let list = this.state.list;
                    list[parseInt(e.target.getAttribute("data-no"))].name = e.target.value;
                    return list;
                })(e)
            }
        );
    }
    setmoney = (e) =>{
        this.setState(
            {
                list: ((e) => {
                    let list = this.state.list;
                    list[parseInt(e.target.getAttribute("data-no"))].money = e.target.value;
                    return list;
                })(e)
            }
        );
        this.sum();
    }   
    sum = () => {
        let sum_money = ((e) => {
            let sum_money = 0;
            for (const key in e.state.list) {
                sum_money += parseInt(e.state.list[key].money) ? parseInt(e.state.list[key].money) : 0;
            }
            return String(sum_money).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        })(this);
        return ReactDOM.render(
            sum_money, document.getElementById("sum")
        );
    }
}

ReactDOM.render(<Otoshidama />, document.getElementById("render"));
