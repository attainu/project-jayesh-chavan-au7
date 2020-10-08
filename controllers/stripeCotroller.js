import dotenv from "dotenv";
dotenv.config();
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";
import { DonationModel } from "../models";

const stripe = new Stripe(process.env.STRIP_SCRETE_KEY);

class StripeController {
    async donate(req, res, next) {
        const { product, token } = req.body;
        console.log("PRODUCT", product);
        console.log("PRICE", product.price);
        const idempotencyKey = uuidv4();

        try {
            const customer = await stripe.customers.create({
                email: token.email,
                source: token.id,
            });
            const result = await stripe.charges.create(
                {
                    amount: product.price * 100,
                    currency: "inr",
                    customer: customer.id,
                    receipt_email: token.email,
                    description: `purchase of ${product.name}`,
                },
                { idempotencyKey }
            );
            const responce = {
                failure_message: result.failure_message,
                receipt_email: result.receipt_email,
                receipt_url: result.receipt_url,
                status: result.status,
            };
            const donation = new DonationModel({
                email: result.receipt_email,
                receiptObject: result,
            });
            await donation.save();
            res.status(200).send(responce);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = new StripeController();
