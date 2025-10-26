export const handleValidation = (validator, data) => {
  const { error } = validator(data);
  if (error) {
    return { ok: false, status: 400, message: error.details[0].message };
  }
  return { ok: true };
};

export const handleServerError = (res, err) => {
  console.error(err);
  res.status(500).json({ ok: false, error: "Internal Server Error" });
};