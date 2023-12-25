import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DashHome = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="p-4 py-10">
            <p>Dear {user.displayName},</p>
            <div className="py-5">
                <p>
                    Thank you for choosing Bistro Boss! We're delighted to have you as part of our online community. Your presence on our website is truly appreciated, and we want to express our gratitude for making us a part of your online experience. <br /> <br />
                    At Bistro boss, we are committed to providing you with mention your website's value proposition - e.g., quality content, excellent products, valuable services. Your support motivates us to continually enhance and improve our offerings to ensure your satisfaction.
                    <br /> <br />
                    If you have any feedback, suggestions, or questions, feel free to reach out to us. We value your input and are always eager to hear from our users.
                    <br /> <br />
                    Once again, thank you for choosing Bistro boss. We look forward to serving you and hope you have a wonderful and fulfilling experience on our platform.
                </p>
            </div>
            <p>Best Regards,</p>
            <p>Bistro Boss</p>
        </div>
    );
};

export default DashHome;