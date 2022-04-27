import React, {Fragment, useState, useEffect} from 'react'
import "./Shipping.css";
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingInfo } from '../../actions/cartAction';
import MetaData from "../layout/MetaData";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home"
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import {country, state} from "country-state-city";
import { useAlert } from 'react-alert';
// import CheckoutSteps from "../Cart/CheckoutSteps";

const Shipping = ({history}) => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const {shippingInfo} = useSelector((state)=>state.cart);

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [state, setState] = useState(shippingInfo.state);
    const [country, setCountry] = useState(shippingInfo.country);
    const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    const shippingSubmit =(e)=>{
        e.preventDefault();

        if(phoneNo.length<10||phoneNo.length>10){
            alert.error("Phone Number should be exactly 10 digits long");
            return;
        }

        dispatch(saveShippingInfo({address, city,state, country, pinCode, phoneNo}));
        history.push("/order/confirm");
    };

    // <CheckoutSteps activeStep={0} />

  return (
    <Fragment>
        <MetaData title="Shopping Details"/>

        <div className="shippingContainer">
            <div className="shippingBox">
                <h2 className="shippingHeading">
                    Shipping Details
                </h2>

                <form onSubmit={shippingSubmit} encType="multipart/form-data" className="shippingForm">
                    <div>
                        <HomeIcon/>
                        <input type="text" placeholder="Address" required value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>

                    <div>
                        <LocationCityIcon/>
                        <input type="text" placeholder="City" required value={city} onChange={(e)=>setCity(e.target.value)} />
                    </div>

                    <div>
                        <PinDropIcon/>
                        <input type="number" placeholder="Pin Code" required value={pinCode} onChange={(e)=>setPinCode(e.target.value)} />
                    </div>

                    <div>
                        <PhoneIcon/>
                        <input type="number" placeholder="Phone Number" required value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} size="10"/>
                    </div>

                    
                </form>

            </div>
        </div>
    </Fragment>
  );
};

export default Shipping;