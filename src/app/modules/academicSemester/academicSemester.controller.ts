import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendresponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterdata } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterdata
    );
    next();
    sendresponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is created successfully',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createSemester,
};
