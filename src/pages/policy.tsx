import React from "react";
import Layout from "../components/Navigation/Layout";
import Seo from "../components/seo";

const Policy: React.FC = () => {
    return (
        <Layout>
            <Seo title="Information Policy" />
        <div className="policy-page">
            <h1>Privacy Policies and Terms of Use</h1>
            <h3>
                Information collection and use
            </h3>
            <p>
                If you visit this site you are not required to provide any personal information and QFinance
                does not collect any personal information. In order to sign up for mailing lists and other
                correspondence, you may be requested to provide your email and name. We will only use this
                information to send correspondence you explicitly signed up for.
            </p>
            <h3>
                Disclosure of information
            </h3>
            <p>
                QFinance does not and will not sell, distribute, or disclose your personal information, or otherwise
                share it with a third party. We will not collect or distribute information to third parties, unless required
                to do so by law through a subpoena, search warrant, court order, or other legal process.
            </p>
            <h3>
                Links to third party sites
            </h3>
            <p>
                Our website may link to third parties. QFinance assumes no responsibility for the information practices
                of sites to which our site provides links. You should review each site's privacy and security
                policies to determine whether you wish to disclose personally identifiable information to them.
            </p>
            <h3>
                Support persons
            </h3>
            <p>
                A person with a disability who is accompanied by a support person will be allowed to have that person
                accompany them on our premises.
            </p>
            <h3>
                Retention of information
            </h3>
            <p>
                The personally identifiable information you provide will be kept as long as the information is required to
                satisfy the purpose for which you provided it or until you request that we delete it. QFinance does not
                assume responsibility for verifying the ongoing accuracy of the information you provide. If you inform us
                that your information has changed, we will make appropriate corrections to reflect your updated information.
            </p>
            <h3>
                Changes to this privacy statement
            </h3>
            <p>
                QFinance reserves the right to amend this Privacy Statement at any time and for any reason. Nothing contained in this
                Statement is intended or should be construed as a contract or agreement between QFinance and any user
                visiting this site or providing personal information in any form.
            </p>
        </div>
        </Layout>
    );
}

export default Policy;