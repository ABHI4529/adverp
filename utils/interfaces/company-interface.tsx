export interface CompanyInterface {
    "company_name": string,
    "company_id": string,
    "user_id": string,
    "company_alt": string,
    "book_begins": string,
    "book_ends": string,
    "admin_password": string,
    "data_freeze": string,
    "address": string,
    "city": string,
    "state": string,
    "reg_type": string,
    "gstIn": string,
    "panIn": string
    "primary_contact": string,
    "secondary_contact": string
    "emailId": string,
    "jurisdiction": string,
    "enable_auto_cs_to_pl": boolean,
    "enable_add_cost_purchase": boolean,
    "enable_add_gst_cost_purchase": boolean,
    "enable_gst_validation": boolean
    "enable_zero_value_entries": boolean,
    "enable_auto_gst_reduction": boolean,
    "enable_auto_voucher_day": boolean,
    "enable_auto_voucher_month": boolean,
    "enable_single_entry_mode": boolean,
    "enable_stop_sale_cExceeds": boolean,
    "enable_auto_receipt_generation": boolean
    "enable_trash": boolean,
    "enable_ledger_allocations": boolean,
    "enable_user_tracking": boolean,
    "enable_invoice_tracking": boolean
    "mail_provider": string,
    "access_token": string
    "sms_provider": string,
    "api_endPoint": string,
    "api_key": string
}


export interface minimalCompany {
    "company_name": string,
    "company_alias": string,
    "book_begins": string,
    "book_ends": string,
    "business_type": string,
    "company_address": string,
    "company_contact": string,
    "company_email": string,
    "company_type": string,
    "company_gst": string,
    "company_pan": string
}