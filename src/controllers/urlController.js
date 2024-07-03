const Url = require('../models/url');
const shortid = require('shortid')

const createShortUrl = async (req, res) => {
  const { originalUrl, userId } = req.body;

  try {
    let url = await Url.findOne({ originalUrl });
    if (url) {
      res.json(url);
    } else {
      const shortUrl = shortid.generate().substring(0,4);
      url = new Url({ originalUrl, shortUrl, userId });
      await url.save();
      res.json(url);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};

const getOriginalUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json('No URL found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};

const getUserURLs = async (req, res) => {
  const { userId } = req.params;
  try {
    const urls = await Url.find({ userId });
    if (urls) {
      res.json(urls);
    } else {
      res.status(404).json('No URLs found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};

module.exports = { createShortUrl, getOriginalUrl, getUserURLs };
