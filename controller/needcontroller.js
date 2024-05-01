const need = require("../model/needModel");
const catchasync = require("../utilis/catchAsync");
const appError = require("../utilis/appError");

exports.getAllneed = catchasync(async (req, res, next) => {
  const needs = await need.find();
  if (!needs) {
    return next(new appError("no needs found", 401));
  }

  res.status(200).json({
    status: "succes",
    needs: needs,
  });
});
exports.addneed = catchasync(async (req, res, next) => {
  const newneed = await need.create(req.body);
  if (!newneed) {
    return next(new appError("no needs found", 401));
  }

  res.status(201).json({
    status: "succes",
    need: newneed,
  });
});
exports.deleteneed = catchasync(async (req, res, next) => {
  const needs = await need.findByIdAndDelete(req.params.id);
  if (!needs) {
    return next(new appError("no needs found", 401));
  }

  res.status(204).json({
    status: "success",
    message: "need has been deleted",
  });
});
exports.updateneed = catchasync(async (req, res, next) => {
  const needs = await need.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!needs) {
    return next(new appError("no needs found", 401));
  }

  res.status(200).json({
    status: "success",
    data: {
      needs,
    },
  });
});
