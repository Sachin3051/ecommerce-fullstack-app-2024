import React, { useState, useEffect, useRef } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
// import {jsPDF} from "jspdf";
// import 'jspdf-autotable';
import {useReactToPrint} from "react-to-print"
import { Content } from "antd/es/layout/layout";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const componentPdf=useRef();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const createHeaders=(keys)=>{
  //   const result=[];
  //   for(let key of keys){
  //     result.push({
  //       id:key,
  //       name:key,
  //       prompt:key
  //     })
  //   }
  // }

  // const exportPdf=async()=>{
  //   const headers=createHeaders([
  //     "id",
  //     "status",
  //     "name",
  //     "payment",
  //     "description",
  //     "price"
  //   ]);
  //   const doc=new jsPDF({orientation:'Landscape'});
  //   // doc.autoTable({
  //   //   html:'#myTable'
  //   // })
  //   const tableData=orders?.products?.map((row)=>({
  //     ...row,
  //     id:row.id.toString(),
  //     price:row.price.toString(),
  //     description:row.description.toString()
  //   }))
  //   doc.table(1,1,tableData,headers);

  //   doc.save("data.pdf");
  // }

  const exportPdf=useReactToPrint({
    content:()=>componentPdf.current,
    documentTitle:"Userdata",
    onAfterPrint:()=>alert("Data Saved")
  })
   
  

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      <div className="container-flui p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
            <button onClick={exportPdf}>Download Pdf</button>
            {orders?.map((o, i) => {
              return (
                <div ref={componentPdf}>
                <div className="border shadow">
                  <table className="table" id="myTable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col"> date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).fromNow()}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    {o?.products?.map((p, i) => (
                      <div className="row mb-2 p-3 card flex-row" key={p._id}>
                        <div className="col-md-4">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top"
                            alt={p.name}
                            width="100px"
                            height={"100px"}
                          />
                        </div>
                        <div className="col-md-8">
                          <p>{p.name}</p>
                          <p>{p.description.substring(0, 30)}</p>
                          <p>Price : {p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
