// Access the JSON data from __NEXT_DATA__ script tag
var nextDataScript = document.getElementById('__NEXT_DATA__');
var jsonData = JSON.parse(nextDataScript.textContent);

// Now you can access the JSON properties as needed
console.log(jsonData.props.pageProps);

// Your existing nextData object
var nextData = {
    "props": {
        "pageProps": {
          
            
            "userCtx": {
                "object_id": "6602c940ccdc0a77f1d5b889",
                "is_spoof": false,
                "has_registry": false,
                "has_wedding_account": false,
                "has_website": false,
                "has_guest_list": false,
                "has_inspiration_account": false,
                "has_invitation_account": false,
                "has_marketplace_account": false,
                "has_completed_onboarding": false,
                "has_store_account": false,
                "has_baby_registry": false,
                "is_inspiration_vendor": false,
                "is_inspiration_admin": false,
                "has_board_items": false,
                "is_guest": true,
                "user_experiments": {
                    "yw-dashboard-v2-new-users": {
                        "key": "yw-dashboard-v2-new-users",
                        "state": "NOT_IN_TEST",
                        "variation_key": "NOT_IN_TEST"
                    },
                    "paper-guest-addressing-improvements-v4": {
                        "key": "paper-guest-addressing-improvements-v4",
                        "state": "TEST",
                        "variation_key": "TEST-1"
                    },
                    // Remaining experiments truncated for brevity
                }
            },
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
        },
        "__N_SSP": true
    },
    "page": "/",
    "query": {},
    "buildId": "web-preauth-b77c6e77d6c4c93d4dd6b045e170cba4bb0032d5",
    "assetPrefix": "https://d1tntvpcrzvon2.cloudfront.net/vpassets",
    "runtimeConfig": {
        "SEGMENT_ID": "5uA1DSKtOVYOwQFc8VmVrXWt5PioMQla",
        "UPLOADCARE_PKEY": "bed481ea2bef6baf44de",
        "ZOLA_ENV": "production",
        "APP_VERSION": "1.2.427",
        "FLAGS": {
            "PAPER_LP_SAMPLE_PACK_SECTION": false
        },
        "BABY_HOST": "https://baby.zola.com"
    },
    "isFallback": false,
    "gssp": true,
    "customServer": true
};

// Accessing properties from the nextData object
console.log(nextData.props.pageProps);
