import React from 'react'
export { }


class RowComponent extends React.Component<{ data: any }> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <>
                <tr>
                    <td><img src={this.props.data.MainImg} /></td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.SmallDesc}</td>
                    <td>{this.props.data.Price}</td>
                    <td>{this.props.data.StockStatus}</td>
                    <td><button><i className="zmdi zmdi-edit"></i></button><button><i className="zmdi zmdi-delete"></i></button></td>
                </tr>
            </>
        )
    }
}

export default RowComponent;