import express from 'express';
import { urlModel } from '../model/shortUrl';

export const createUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log('The fullUrl is ', req.body.fullUrl);

    const { fullUrl } = req.body;
    const urlFound = await urlModel.find({ fullUrl });

    if (urlFound.length > 0) {
      res.status(409);
      res.send(urlFound);
    } else {
      const shortUrl = await urlModel.create({ fullUrl });
      res.status(201).send(shortUrl);
    }
  } catch (error) {
    res.status(404).send('Url not found');
  }
};

export const getUrl = async (req: express.Request, res: express.Response) => {
  try {
    const record = await urlModel.findOne({ shortUrl: req.params.id });

    if (record) {
      record.clicks++;
      record.save();
      res.redirect(`${record.fullUrl}`);
      res.status(200).send(record);
    } else {
      res.status(404).send({ message: 'Unable to fetch Full URL' });
    }
  } catch (err) {}
};

export const getAllUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const shortUrls = await urlModel.find();
    if (shortUrls.length < 0) {
      res.status(404).send('Short Url not found');
    } else {
      res.status(200).send(shortUrls);
    }
  } catch (err) {}
};

export const deleteUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deletedUrl = await urlModel.findByIdAndDelete({ _id: req.params.id });
    if (deletedUrl) {
      res.status(200).send('URL deleted');
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: 'Something went wrong while deleting short url' });
  }
};
