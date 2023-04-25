export const validate = (data) => {
  const errors = {};
  if (!data.name) errors.name = "لطفا نام خود را وارد کنید!";
  else if (data.name.length <= 2)
    errors.name = "لطفا اسم خود را بدرسستی وارد کنید!";
  else delete errors.name;
  if (!data.email) errors.email = "لطفا ایمیل خود را وارد کنید!";
  else if (!/\S+@\S+\.\S/.test(data.email))
    errors.email = "لطفا ایمیل خود را بدرستی وارد کنید!";
  else delete errors.email;
  if (!data.comment) errors.comment = "لطفا نظر خود را بنویسید!";
  else if (data.comment.length <= 10)
    errors.comment = "متن  نباید کمتر از 10 حرف باشد!";
  else delete errors.comment;

  return errors;
};
