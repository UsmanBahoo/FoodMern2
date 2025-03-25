const Feedback = require('../models/Feedback');

const FeedbackController = {
    async createFeedback(req, res) {
        console.log('createFeedback called');
        try {
            console.log('req.body:', req.body);
            const feedback = new Feedback(req.body);
            await feedback.save();
            res.status(201).send(feedback);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getFeedbacks(req, res) {
        try {
            console.log('getFeedbacks called'); 
            const feedbacks = await Feedback.find({});
            console.log('Feedbacks:', feedbacks); 
            res.send(feedbacks);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteFeedback(req, res) {
        try {
            const feedback = await Feedback.findByIdAndDelete(req.params.id);
            if (!feedback) {
                return res.status(404).send('Feedback not found');
            }
            res.send(feedback);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
module.exports = FeedbackController;