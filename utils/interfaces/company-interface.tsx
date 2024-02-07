export interface CompanyInterface {
    "company_name": string,
    "company_id" : string,
    "user_id" : string,
    "company_alt": string,
    "book_begins": string,
    "book_ends": string,
    "admin_password": string,
    "data_freeze": string,
    "address": string,
    "city": string,
    "state": string,
    "contact": {
        "primary_contact": string,
        "secondary_contact": string
    },
    "emailId": string,
    "tax_details": {
        "reg_type": string,
        "gstIn": string,
        "panIn": string
    },
    "jurisdiction": string,
    "company_options": {
        "account_options": {
            "enable_auto_cs_to_pl": boolean,
            "enable_add_cost_purchase": boolean,
            "enable_add_gst_cost_purchase": boolean,
            "enable_gst_validation": boolean
        },
        "invoicing_options": {
            "enable_zero_value_entries": boolean,
            "enable_auto_gst_reduction": boolean,
            "enable_auto_voucher_day": boolean,
            "enable_auto_voucher_month": boolean,
            "enable_single_entry_mode": boolean,
            "enable_stop_sale_cExceeds": boolean,
            "enalbe_auto_receipt_generation": boolean
        },
        "audit_options": {
            "enable_trash": boolean,
            "enable_ledger_allocations": boolean,
            "enable_user_tracking": boolean,
            "enable_invoice_tracking": boolean
        },
        "services_options": {
            "mail_options": {
                "mail_provider": string,
                "access_token": string
            },
            "sms_options": {
                "sms_provider": string,
                "custom_sms_provider": {
                    "api_endPoint": string,
                    "api_key": string
                }
            }
        }
    }
}