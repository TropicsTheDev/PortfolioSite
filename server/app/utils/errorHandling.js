exports.throwError = function (code, errorMessage) {
  return (err) => {
    const error = new Error(errorMessage || "Something went wrong");
    error.code = code;
    if (err.errors) {
      error.message = err.errors.map((e) => e.message).join("\n");
    }
    throw error;
  };
};