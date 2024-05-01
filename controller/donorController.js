const donor = require("../model/donorModel");
const catchasync = require("../utilis/catchAsync");
const appError = require("../utilis/appError");

exports.getAllDonor = catchasync(async (req, res, next) => {
  const donors = await donor.find();
  if (!donors) {
    return next(new appError("no donors found", 401));
  }

  res.status(200).json({
    status: "succes",
    donors: donors,
  });
});
exports.addDonor = catchasync(async (req, res, next) => {
  const newdonor = await donor.create(req.body);
  if (!newdonor) {
    return next(new appError("no donors found", 401));
  }

  res.status(201).json({
    status: "succes",
    donor: newdonor,
  });
});
exports.deleteDoner = catchasync(async (req, res, next) => {
  const donors = await donor.findByIdAndDelete(req.params.id);
  if (!donors) {
    return next(new appError("no donors found", 401));
  }

  res.status(204).json({
    status: "success",
    message: "donor has been deleted",
  });
});
exports.updateDoner = catchasync(async (req, res, next) => {
  const donors = await donor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!donors) {
    return next(new appError("no donors found", 401));
  }

  res.status(200).json({
    status: "success",
    data: {
      donors,
    },
  });
});
