import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GREEN_COLOR, WHITE_COLOR } from '../../res/colors'

const TermsAndConditions = () => {
    return (
        <ScrollView>
            <Text style={styles.headingWrapper}>Terms and conditions</Text>
            <Text style={styles.bodyTextWrapper}> These terms and conditions (“Agreement”) set forth the general terms and conditions of your use of the “QR Scanner” mobile application (“Mobile Application” or “Service”) and any of its related products and services (collectively, “Services”). This Agreement is legally binding between you (“User”, “you” or “your”)
                and this Mobile Application developer (“Operator”, “we”, “us” or “our”). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity.
                If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Mobile Application and Services. By accessing and using the Mobile Application and Services, you acknowledge that you have read, understood, and agree to be bound
                by the terms of this Agreement. You acknowledge that this Agreement is a contract between you and the Operator, even though it is electronic and is not physically signed by you, and it governs your use of the Mobile Application and Services.</Text>

            <Text style={styles.headingWrapper}>  Links to other resources</Text>
            <Text style={styles.bodyTextWrapper}> Although the Mobile Application and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible
                for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other
                conditions of use of any resource which you access through a link in the Mobile Application. Your linking to any other off-site resources is at your own risk.
                Changes and amendments
                We reserve the right to modify this Agreement or its terms related to the Mobile Application and Services at any time at our discretion. When we do, we will post a notification in the Mobile Application, send you an email to notify you. We may also provide notice to you in other ways at our discretion, such as through the
                contact information you have provided.
                An updated version of this Agreement will be effective immediately upon the posting of the revised Agreement unless otherwise specified. Your continued use of the Mobile Application and Services after the effective date of the revised Agreement (or such other act specified at that time) will constitute your consent to those changes.
                Acceptance of these terms
                You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Mobile Application and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Mobile Application and Services.
                This terms and conditions policy was created with the help of WebsitePolicies.com</Text>


            <Text style={styles.headingWrapper}>Contacting us</Text>

            <Text style={styles.bodyTextWrapper}> If you have any questions, concerns, or complaints regarding this Agreement,
                we encourage you to contact us using the details below:
                mushahidh224@gmail.com
                This document was last updated on November 22, 2022</Text>

        </ScrollView>
    )
}

export default TermsAndConditions

const styles = StyleSheet.create({
    headingWrapper: {
        fontSize: 16,
        color: WHITE_COLOR,
        fontWeight: '800',
        paddingHorizontal: 8,
        paddingVertical : 4,
        backgroundColor : GREEN_COLOR,
    },
    bodyTextWrapper: {
        fontSize: 12,
        textAlign: 'justify',
        paddingHorizontal : 8,
        paddingVertical : 4
    }
})