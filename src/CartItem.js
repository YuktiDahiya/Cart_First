import React from 'react';

class CartItem extends React.Component {
   
    /*using promises we can use setState which is asynchronous as synchronously ans so we will see the current value of state
    testing (){
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('done');
            },5000)
        })
    }

    promise.then(()=>{
        //setState acts like a synchronous call
        this.setState ({qty: this.state.qty + 10});
        console.log('state', this.state);
    })
    increaseQuantity = ()=>{
        console.log('this',this.state);
        //setState form 1
        /*this.setState({
            qty: this.state.qty + 1
        });
        //setState form 2
        this.setState((prevState =>{
            return {
                qty: prevState.qty +1
            }
        }));
    }
    decreaseQuantity = ()=>{
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState =>{
            return {
                qty: prevState.qty - 1
            }
        }));
    }*/



    render() {
        const {price,title,qty} = this.props.product;
        const {
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity,
            onDeleteQuantity
        } = this.props;
        return (
            <div className = "cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>

                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25}}>{title}</div>
                    <div style={{ color : '#777'}}>Rs {price}</div>
                    <div style={{ color: '#777'}}>Qty : {qty}</div>
                    <div className='cart-item-actions'>
                        {/*buttons*/}
                        <img 
                            alt="increase" 
                            className='action-icons' 
                            src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1641197460~hmac=c94f6fbdeafc6a10b30f314e75759577"
                            onClick={() => onIncreaseQuantity(product)} 
                            

                        />
                        <img
                            alt="decrease" 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            onClick={() => onDecreaseQuantity(product)}
                            
                        />
                        <img 
                            alt="delete" 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                            onClick={() => onDeleteQuantity(product.id)} 
                           

                        />
                    </div>

                </div>
            </div>

        );
    }
}

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;