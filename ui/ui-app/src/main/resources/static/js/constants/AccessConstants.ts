class AccessConstantClass{
    
    constructor(){
     }
        /**
         * Allows access to categories.
         * @type {string}
         */
        CATEGORIES_ACCESS: string = "accessCategories";

        /**
         * Allows the administration of any category; even those created by others.
         * @type {string}
         */
        CATEGORIES_ADMIN: string = "adminCategories";

        /**
         * Allows creating and editing new categories.
         * @type {string}
         */
        CATEGORIES_EDIT: string = "editCategories";

        /**
         * Allows access to data sources.
         * @type {string}
         */
        DATASOURCE_ACCESS: string = "accessDatasources";

        /**
         * Allows creating and editing new data sources.
         * @type {string}
         */
        DATASOURCE_EDIT: string = "editDatasources";

        /**
         * Allows access to feeds.
         * @type {string}
         */
        FEEDS_ACCESS: string = "accessFeeds";

        /**
         * Allows the administration of any feed; even those created by others.
         * @type {string}
         */
        FEEDS_ADMIN: string = "adminFeeds";

        /**
         * Allows creating and editing new feeds.
         * @type {string}
         */
        FEEDS_EDIT: string = "editFeeds";

        /**
         * Allows exporting feeds definitions.
         * @type {string}
         */
        FEEDS_EXPORT: string = "exportFeeds";

        /**
         * Allows importing of previously exported feeds.
         * @type {string}
         */
        FEEDS_IMPORT: string = "importFeeds";

        /**
         * Allows access to feeds and feed-related functions.
         * @type {string}
         */
        FEED_MANAGER_ACCESS: string = "accessFeedsSupport";

        /**
         * Allows the ability to view existing groups.
         * @type {string}
         */
        GROUP_ACCESS: string = "accessGroups";

        /**
         * Allows the ability to create and manage groups.
         * @type {string}
         */
        GROUP_ADMIN: string = "adminGroups";

        /**
         * Allows access to Tables page
         * @type {string}
         */
        TABLES_ACCESS: string = "accessTables";

        /**
         * Allows users to access the SLA page
         * @type {string}
         */
        SLA_ACCESS: string = "accessServiceLevelAgreements";

        /**
         * Allows users to create new Service Level agreements
         * @type {string}
         */
        SLA_EDIT: string = "editServiceLevelAgreements";

        /**
         * Allows users to create new Service Level agreements
         * @type {string}
         */
        EDIT_SERVICE_LEVEL_AGREEMENT_EMAIL_TEMPLATE: string = "editServiceLevelAgreementEmailTemplate";

        /**
         * Allows access to feed templates.
         * @type {string}
         */
        TEMPLATES_ACCESS: string = "accessTemplates";

        /**
         * Allows the administration of any feed template; even those created by others.
         * @type {string}
         */
        TEMPLATES_ADMIN: string = "adminTemplates";

        /**
         * Allows created and editing new feed templates.
         * @type {string}
         */
        TEMPLATES_EDIT: string = "editTemplates";

        /**
         * Allows exporting template definitions.
         * @type {string}
         */
        TEMPLATES_EXPORT: string = "exportTemplates";

        /**
         * Allows importing of previously exported templates.
         * @type {string}
         */
        TEMPLATES_IMPORT: string = "importTemplates";

        /**
         * Allows the ability to view existing users.
         * @type {string}
         */
        USERS_ACCESS: string = "accessUsers";

        /**
         * Allows the ability to create and manage users.
         * @type {string}
         */
        USERS_ADMIN: string = "adminUsers";

        /**
         * Allows access to user and group-related functions.
         * @type {string}TEMPLATES_IMPORT
         */
        USERS_GROUPS_ACCESS: string = "accessUsersGroupsSupport";

        /**
         * allows access to the visual query link on the left
         * @type {string}
         */
        VISUAL_QUERY_ACCESS: string = "accessVisualQuery";

        /**
         * Access Search
         * @type {string}
         */
        SEARCH_ACCESS: string = "searchAccess";

        /**
         * Allows administration of operations; such as stopping and abandoning them.
         * @type {string}
         */
        OPERATIONS_ADMIN: string = "adminOperations";

        /**
         * Allows access to operational information like active feeds and execution history; etc.
         * @type {string}
         */
        OPERATIONS_MANAGER_ACCESS: string = "accessOperations";

        /**
         * access to ops manager alerts
         * @type {string}
         */
        ALERTS_ACCESS: string = "accessAlerts";

        /**
         * Access to ops manager feed details
         * @type {string}
         */
        FEED_OPERATIONS_DETAIL_ACCESS: string = "accessOperationsFeedDetails";

        /**
         * Access to ops manager jobs
         * @type {string}
         */
        JOBS_ACCESS: string = "accessJobs";

        /**
         * Access to ops manager job details
         * @type {string}
         */
        JOB_DETAILS_ACCESS: string = "accessJobDetails";

        /**
         * Access Services
         * @type {string}
         */
        SERVICES_ACCESS: string = "accessServices";

        /**
         * Access to ops manager charts
         * @type {string}
         */
        CHARTS_ACCESS: string = "accessCharts";

        /**
         * Allows access to search all indexed columns
         * @type {string}
         */
        GLOBAL_SEARCH_ACCESS: string = "accessSearch";

        ADMIN_METADATA: string= "adminMetadata";

        ENTITY_ACCESS = {
            CATEGORY: {
                //   EDIT_CATEGORY_SUMMARY: "editCategorySummary", // will not be used in v 0.8.0
                EDIT_CATEGORY_DETAILS: "editCategoryDetails",
                DELETE_CATEGORY: "deleteCategory",
                CREATE_FEED: "createFeedUnderCategory",
                ENABLE_CATEGORY: "enableCategory",
                CHANGE_CATEGORY_PERMISSIONS: "changeCategoryPermissions"
            },
            FEED: {
                //EDIT_FEED_SUMMARY: "editFeedSummary", // will not be used in v0.8.0
                EDIT_FEED_DETAILS: "editFeedDetails",
                DELETE_FEED: "deleteFeed",
                //ENABLE_FEED: "enableFeed",  /// Do we need this??... can enable be inferred from edit details
                CHANGE_FEED_PERMISSIONS: "changeFeedPermissions",
                EXPORT: "exportFeed",
                START: "startFeed"
            },
            TEMPLATE: {
                EDIT_TEMPLATE: "editTemplate",
                DELETE_TEMPLATE: "deleteTemplate",
                EXPORT: "exportTemplate",
                CREATE_TEMPLATE: "createFeedFromTemplate",
                CHANGE_TEMPLATE_PERMISSIONS: "changeTemplatePermissions"
            },
            DATASOURCE: {
                EDIT_DETAILS: "editDatasourceDetails",
                DELETE_DATASOURCE: "deleteDatasource",
                CHANGE_DATASOURCE_PERMISSIONS: "changeDatasourcePermissions"
            }
        };

    searchpermissions: any[];
        UI_STATES= {
            FEEDS: {state: "feeds", permissions: [this.FEEDS_ACCESS]},
            DEFINE_FEED: {state: "define-feed", permissions: [this.FEEDS_EDIT]},
            DEFINE_FEED_COMPLETE: {state: "define-feed-complete", permissions: [this.FEEDS_ACCESS]},
            IMPORT_FEED: {state: "import-feed", permissions: [this.FEEDS_IMPORT]},
            FEED_DETAILS: {state: "feed-details", permissions: [this.FEEDS_ACCESS]},
            EDIT_FEED: {state: "edit-feed", permissions: [this.FEEDS_ACCESS]},
            CATEGORIES: {state: "categories", permissions: [this.CATEGORIES_ACCESS]},
            CATEGORY_DETAILS: {state: "category-details", permissions: [this.CATEGORIES_ACCESS]},
            BUSINESS_METADATA: {state: "business-metadata", permissions: [this.CATEGORIES_ADMIN]},
            USERS: {state: "users", permissions: [this.USERS_ACCESS]},
            USERS_DETAILS: {state: "user-details", permissions: [this.USERS_ACCESS]},
            GROUPS: {state: "groups", permissions: [this.USERS_GROUPS_ACCESS]},
            GROUP_DETAILS: {state: "group-details", permissions: [this.USERS_GROUPS_ACCESS]},
            VISUAL_QUERY: {state: "visual-query", permissions: [this.VISUAL_QUERY_ACCESS]},
            SERVICE_LEVEL_AGREEMENTS: {state: "service-level-agreements", permissions: [this.SLA_ACCESS]},
            SERVICE_LEVEL_AGREEMENT_EMAIL_TEMPLATES: {state: "sla-email-templates", permissions: [this.EDIT_SERVICE_LEVEL_AGREEMENT_EMAIL_TEMPLATE]},
            CATALOG: {state: "catalog", permissions: [this.TABLES_ACCESS]},
            SCHEMAS: {state: "schemas", permissions: [this.TABLES_ACCESS]},
            TABLES: {state: "schemas-schema", permissions: [this.TABLES_ACCESS]},
            TABLE: {state: "schemas-schema-table", permissions: [this.TABLES_ACCESS]},
            DATASOURCES: {state: "datasources", permissions: [this.DATASOURCE_ACCESS]},
            DATASOURCE_DETAILS: {state: "datasource-details", permissions: [this.DATASOURCE_ACCESS]},
            REGISTERED_TEMPLATES: {state: "registered-templates", permissions: [this.TEMPLATES_ACCESS]},
            REGISTER_NEW_TEMPLATE: {state: "register-new-template", permissions: [this.TEMPLATES_EDIT]},
            REGISTER_TEMPLATE: {state: "register-template", permissions: [this.TEMPLATES_EDIT]},
            REGISTER_TEMPLATE_COMPLETE: {state: "register-template-complete", permissions: [this.TEMPLATES_EDIT]},
            IMPORT_TEMPLATE: {state: "import-template", permissions: [this.TEMPLATES_IMPORT]},
            SEARCH: {state: "search",permissions: this.searchpermissions},//permissions: [null]},
            DOMAIN_TYPES: {state: "domain-types", permissions: [this.FEEDS_ADMIN]},
            DOMAIN_TYPE_DETAILS: {state: "domain-type-details", permissions: [this.FEEDS_ADMIN]},
            JCR_ADMIN:{state:"jcr-query",permissions:[this.ADMIN_METADATA]},
            //Ops Manager
            ALERTS: {state: "alerts", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            ALERT_DETAILS: {state: "alert-details", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            CHARTS: {state: "charts", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            OPS_FEED_DETAILS: {state: "ops-feed-details", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            FEED_STATS: {state: "feed-stats", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            JOBS: {state: "jobs", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            JOB_DETAILS: {state: "job-details", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            DASHBOARD: {state: "dashboard", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            SCHEDULER: {state: "scheduler", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            SERVICE_HEALTH: {state: "service-health", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            SERVICE_DETAILS: {state: "service-details", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            SERVICE_COMPONENT_DETAILS: {state: "service-component-details", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            SERVICE_LEVEL_ASSESSMENTS: {state: "service-level-assessments", permissions: [this.OPERATIONS_MANAGER_ACCESS]},
            SERVICE_LEVEL_ASSESSMENT: {state: "service-level-assessment", permissions: [this.OPERATIONS_MANAGER_ACCESS]}
        }
    }
const AccessConstants = new AccessConstantClass();
export default AccessConstants;