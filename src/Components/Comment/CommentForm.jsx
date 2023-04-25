import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { validate } from "../functions/valitade";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { CacheProvider } from "@emotion/react";

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const CommentForm = ({ slug }) => {
  const [dataFormComment, setDataFormComment] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [pressed, setPressed] = useState(false);
  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: {
      name: dataFormComment.name,
      email: dataFormComment.email,
      text: dataFormComment.comment,
      slug: slug,
    },
  });
  const sendHandler = (event) => {
    if (!Object.keys(errors).length) {
      sendComment();
      setPressed(true);
    } else {
      setTouched({
        name: true,
        email: true,
        comment: true,
      });
      toast.warn("تمام فیلد هارو پر کن", { position: "top-center" });
    }
    if (data && pressed) {
      toast.success("کامنت ارسال شد ومنتظر تایید می باشد", {
        position: "top-center",
      });
      setPressed(false);
      setDataFormComment({
        name: "",
        email: "",
        comment: "",
      });
    }
  };
  useEffect(() => {
    setErrors(validate(dataFormComment));
  }, [dataFormComment, touched, pressed]);
  const inputHandler = (event) => {
    setDataFormComment({
      ...dataFormComment,
      [event.target.name]: event.target.value,
    });
  };
  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  return (
    <CacheProvider value={cacheRtl}>
      <Grid
        container
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px ",
          borderRadius: "10px",
          py: 1,
          mt: 5,
        }}
      >
        <Grid item xs={12} margin={2}>
          <Typography
            component="p"
            variant="h6"
            fontWeight={700}
            color="primary"
          >
            ارسال کامن
          </Typography>
        </Grid>
        <Grid item xs={12} margin={1}>
          <TextField
            label="نام کاربری"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            name="name"
            value={dataFormComment.name}
            onChange={inputHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && (
            <Typography
              component="p"
              variant="p"
              color="primary"
              sx={{ marginTop: 1, fontWeight: "500" }}
            >
              {errors.name}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} margin={1}>
          <TextField
            label="ایمیل"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            name="email"
            value={dataFormComment.email}
            onChange={inputHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && (
            <Typography
              component="p"
              variant="p"
              color="primary"
              sx={{ marginTop: 1, fontWeight: "500" }}
            >
              {errors.email}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} margin={1}>
          <TextField
            label="متن کامنت"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            name="comment"
            multiline
            minRows={4}
            value={dataFormComment.comment}
            onChange={inputHandler}
            onFocus={focusHandler}
          />
          {errors.comment && touched.comment && (
            <Typography
              component="p"
              variant="p"
              color="primary"
              sx={{ marginTop: 1, fontWeight: "500" }}
            >
              {errors.comment}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} margin={2}>
          {loading ? (
            <Button variant="contained" disabled>
              درحال ارسال...
            </Button>
          ) : (
            <Button variant="contained" onClick={sendHandler}>
              ارسال
            </Button>
          )}
        </Grid>
        <ToastContainer />
      </Grid>
    </CacheProvider>
  );
};

export default CommentForm;
