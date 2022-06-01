import React from "react";
import styles from "./AddAddress.module.scss";
import Button from "../../../Buttons/Button";
import { useForm } from "react-hook-form";
import requestApi from "../../../../../Servis/api/request";
function AddAddress({ setOpen }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // requestApi.post("/user/deliver/address/", data).then((res) => {
    //   console.log(res);
    // });
    console.log(data);
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <h5>Manzil qo’shish</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            {...register("AddresName", { required: true })}
          ></input>
          <input
            type="text"
            placeholder="Full address"
            {...register("FullAdress")}
          ></input>
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Apartment, office"
              {...register("Apartment")}
            ></input>
            <input
              type="text"
              placeholder="Floor (optional) "
              {...register("Floor")}
            ></input>
          </div>
          <input
            type="number"
            placeholder="Door phone (optional)"
            {...register("Door phone")}
          ></input>
          <input
            type="text"
            placeholder="Instructions for courier (optional)"
            {...register("Instructions")}
          ></input>
        </form>
        <div className={styles.btnInput} onClick={handleSubmit(onSubmit)}>
          <Button title={"Add address"} />
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
