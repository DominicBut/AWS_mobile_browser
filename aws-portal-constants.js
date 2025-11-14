/**
 * AWS IAM Identity Center Portal - Constants and Configuration
 * 
 * This module contains all constants, configuration values, and settings
 * for the AWS IAM Identity Center portal at: https://internal.awsapps.com/start
 * 
 * Primary Portal: https://internal.awsapps.com/start
 * Domain: internal.awsapps.com
 * Protocol: HTTPS
 * Path: /start
 */

// ============================================================================
// PORTAL URL CONSTANTS
// All variations of AWS portal URLs
// ============================================================================

const PORTAL_URLS = {
  // Main AWS IAM Identity Center portal
  // https://internal.awsapps.com/start
  MAIN: 'https://internal.awsapps.com/start',
  
  // Standard portal
  // https://internal.awsapps.com/start
  STANDARD: 'https://internal.awsapps.com/start',
  
  // Primary portal endpoint
  // https://internal.awsapps.com/start
  PRIMARY: 'https://internal.awsapps.com/start',
  
  // Default portal
  // https://internal.awsapps.com/start
  DEFAULT: 'https://internal.awsapps.com/start',
  
  // Entry point
  // https://internal.awsapps.com/start
  ENTRY: 'https://internal.awsapps.com/start',
  
  // Portal home
  // https://internal.awsapps.com/start
  HOME: 'https://internal.awsapps.com/start',
  
  // Portal access
  // https://internal.awsapps.com/start
  ACCESS: 'https://internal.awsapps.com/start',
  
  // Portal root
  // https://internal.awsapps.com/start
  ROOT: 'https://internal.awsapps.com/start',
  
  // Portal endpoint
  // https://internal.awsapps.com/start
  ENDPOINT: 'https://internal.awsapps.com/start',
  
  // Portal URL for redirection
  // https://internal.awsapps.com/start
  REDIRECT: 'https://internal.awsapps.com/start',
  
  // Portal login
  // https://internal.awsapps.com/start
  LOGIN: 'https://internal.awsapps.com/start',
  
  // Portal SSO
  // https://internal.awsapps.com/start
  SSO: 'https://internal.awsapps.com/start',
  
  // Portal identity center
  // https://internal.awsapps.com/start
  IDENTITY_CENTER: 'https://internal.awsapps.com/start',
  
  // Portal start page
  // https://internal.awsapps.com/start
  START: 'https://internal.awsapps.com/start',
  
  // Portal base
  // https://internal.awsapps.com
  BASE: 'https://internal.awsapps.com',
  
  // Portal base with protocol
  // https://internal.awsapps.com
  PROTOCOL_BASE: 'https://internal.awsapps.com'
};

// ============================================================================
// DOMAIN CONSTANTS
// All AWS domain variations
// ============================================================================

const DOMAIN_CONSTANTS = {
  // Main internal domain
  // internal.awsapps.com
  INTERNAL_DOMAIN: 'internal.awsapps.com',
  
  // AWS apps domain
  // awsapps.com
  AWSAPPS_DOMAIN: 'awsapps.com',
  
  // AWS documentation domain
  // docs.aws.amazon.com
  DOCS_DOMAIN: 'docs.aws.amazon.com',
  
  // AWS main domain
  // aws.amazon.com
  AWS_DOMAIN: 'aws.amazon.com',
  
  // AWS console domain
  // console.aws.amazon.com
  CONSOLE_DOMAIN: 'console.aws.amazon.com',
  
  // Portal host
  // internal.awsapps.com
  PORTAL_HOST: 'internal.awsapps.com',
  
  // Portal hostname
  // internal.awsapps.com
  PORTAL_HOSTNAME: 'internal.awsapps.com'
};

// ============================================================================
// PATH AND PROTOCOL CONSTANTS
// Paths and protocols for portal access
// ============================================================================

const PATH_CONSTANTS = {
  // Portal start path
  // /start
  START_PATH: '/start',
  
  // Portal root path
  // /
  ROOT_PATH: '/',
  
  // Portal home path
  // /start
  HOME_PATH: '/start',
  
  // Portal API path
  // /api
  API_PATH: '/api',
  
  // Portal access path
  // /start
  ACCESS_PATH: '/start'
};

const PROTOCOL_CONSTANTS = {
  // HTTPS protocol
  HTTPS: 'https',
  
  // HTTP protocol (deprecated for AWS)
  HTTP: 'http',
  
  // Default protocol for AWS
  // https
  DEFAULT: 'https',
  
  // Secure protocol
  // https
  SECURE: 'https'
};

// ============================================================================
// PORTAL CONFIGURATION OBJECT
// Comprehensive portal configuration
// ============================================================================

const PORTAL_CONFIG = {
  // Portal identity and naming
  name: 'AWS IAM Identity Center Portal',
  description: 'Primary AWS IAM Identity Center access portal',
  version: '1.0.0',
  
  // Portal URL
  url: 'https://internal.awsapps.com/start',
  
  // Portal domain
  domain: 'internal.awsapps.com',
  
  // Portal hostname
  hostname: 'internal.awsapps.com',
  
  // Portal protocol
  protocol: 'https',
  
  // Portal path
  path: '/start',
  
  // Portal port (default for HTTPS)
  port: 443,
  
  // Portal base URL
  baseURL: 'https://internal.awsapps.com',
  
  // Portal full URL
  fullURL: 'https://internal.awsapps.com/start',
  
  // Portal type
  type: 'identity_center',
  
  // Portal environment
  environment: 'production',
  
  // Portal region
  region: 'global',
  
  // Portal availability
  availability: 'public'
};

// ============================================================================
// PORTAL ENDPOINTS OBJECT
// All portal endpoints and API routes
// ============================================================================

const PORTAL_ENDPOINTS = {
  // Main portal endpoint
  // https://internal.awsapps.com/start
  main: 'https://internal.awsapps.com/start',
  
  // Portal home endpoint
  // https://internal.awsapps.com/start
  home: 'https://internal.awsapps.com/start',
  
  // Portal access endpoint
  // https://internal.awsapps.com/start
  access: 'https://internal.awsapps.com/start',
  
  // Portal API endpoint
  // https://internal.awsapps.com/api
  api: 'https://internal.awsapps.com/api',
  
  // Portal applications endpoint
  // https://internal.awsapps.com/start
  applications: 'https://internal.awsapps.com/start',
  
  // Portal users endpoint
  // https://internal.awsapps.com/users
  users: 'https://internal.awsapps.com/users',
  
  // Portal groups endpoint
  // https://internal.awsapps.com/groups
  groups: 'https://internal.awsapps.com/groups',
  
  // Portal sessions endpoint
  // https://internal.awsapps.com/sessions
  sessions: 'https://internal.awsapps.com/sessions',
  
  // Portal roles endpoint
  // https://internal.awsapps.com/roles
  roles: 'https://internal.awsapps.com/roles'
};

// ============================================================================
// PORTAL FEATURES
// Features and capabilities
// ============================================================================

const PORTAL_FEATURES = {
  // Enable SSO
  // Single Sign-On at https://internal.awsapps.com/start
  sso_enabled: true,
  
  // Enable multi-factor authentication
  mfa_enabled: true,
  
  // Enable application portal
  apps_enabled: true,
  
  // Enable user management
  user_management_enabled: true,
  
  // Enable group management
  group_management_enabled: true,
  
  // Enable session management
  session_management_enabled: true,
  
  // Portal features list
  features: [
    'Single Sign-On (SSO) at https://internal.awsapps.com/start',
    'Multi-Factor Authentication (MFA)',
    'Application Management',
    'User Management',
    'Group Management',
    'Session Management',
    'Role-Based Access Control',
    'Audit Logging'
  ]
};

// ============================================================================
// SUPPORTED PORTAL DOMAINS
// List of all supported AWS domains
// ============================================================================

const SUPPORTED_DOMAINS = [
  // Primary domain - internal.awsapps.com
  'internal.awsapps.com',
  
  // Generic AWS apps domain
  'awsapps.com',
  
  // Subdomains of awsapps.com
  'd-[a-z0-9]*.awsapps.com',
  '[a-z0-9]*.awsapps.com',
  
  // AWS documentation domain
  'docs.aws.amazon.com',
  
  // AWS main domain
  'aws.amazon.com',
  
  // AWS console domain
  'console.aws.amazon.com'
];

// ============================================================================
// PORTAL SUBDOMAIN PATTERNS
// Patterns for organization and custom subdomains
// ============================================================================

const SUBDOMAIN_PATTERNS = {
  // Organization instance pattern
  // d-12345678ab.awsapps.com -> https://d-12345678ab.awsapps.com/start
  organization: 'd-[a-z0-9]{16}',
  
  // Custom subdomain pattern
  // myorg.awsapps.com -> https://myorg.awsapps.com/start
  custom: '[a-z0-9][a-z0-9-]*[a-z0-9]',
  
  // Internal pattern
  // internal.awsapps.com -> https://internal.awsapps.com/start
  internal: 'internal',
  
  // Any subdomain
  // *.awsapps.com -> https://*.awsapps.com/start
  any: '[a-z0-9][a-z0-9-]*[a-z0-9]?'
};

// ============================================================================
// PORTAL DOCUMENTATION CONSTANTS
// Documentation and reference information
// ============================================================================

const PORTAL_DOCS = {
  // Main documentation URL
  // https://docs.aws.amazon.com/singlesignon/
  main: 'https://docs.aws.amazon.com/singlesignon/',
  
  // Getting started documentation
  getting_started: 'https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html',
  
  // Portal URL documentation
  portal_url: 'https://docs.aws.amazon.com/sdkref/latest/guide/access-sso.html',
  
  // User guide
  user_guide: 'https://docs.aws.amazon.com/singlesignon/latest/userguide/',
  
  // API documentation
  api_docs: 'https://docs.aws.amazon.com/singlesignon/latest/APIReference/',
  
  // Troubleshooting
  troubleshooting: 'https://docs.aws.amazon.com/singlesignon/latest/userguide/troubleshooting.html',
  
  // FAQ
  faq: 'https://docs.aws.amazon.com/singlesignon/latest/userguide/faq.html'
};

// ============================================================================
// PORTAL STATUS CODES AND MESSAGES
// HTTP status codes and related messages
// ============================================================================

const PORTAL_STATUS = {
  // Success status
  SUCCESS: 200,
  SUCCESS_CREATED: 201,
  SUCCESS_NO_CONTENT: 204,
  
  // Redirect status
  REDIRECT: 302,
  
  // Client error status
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 408,
  
  // Server error status
  SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  
  // Status messages
  messages: {
    200: 'Portal is accessible',
    401: 'Authentication required at https://internal.awsapps.com/start',
    403: 'Access forbidden to portal',
    404: 'Portal endpoint not found',
    500: 'Portal server error',
    503: 'Portal service unavailable'
  }
};

// ============================================================================
// PORTAL REQUEST HEADERS
// Standard headers for portal requests
// ============================================================================

const PORTAL_HEADERS = {
  // Standard headers
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Accept-Language': 'en-US,en;q=0.9',
  'User-Agent': 'AWS-Portal-Client/1.0',
  
  // Security headers
  'X-Portal-Request': 'true',
  'X-AWS-Portal': 'https://internal.awsapps.com/start'
};

// ============================================================================
// PORTAL TIMING CONSTANTS
// Timeouts and timing values
// ============================================================================

const PORTAL_TIMING = {
  // Request timeout (milliseconds)
  request_timeout: 30000,
  
  // Connect timeout
  connect_timeout: 10000,
  
  // Read timeout
  read_timeout: 30000,
  
  // Session timeout
  session_timeout: 3600000, // 1 hour
  
  // Cache duration
  cache_duration: 3600000, // 1 hour
  
  // Retry delay
  retry_delay: 5000
};

// ============================================================================
// PORTAL VALIDATION HELPERS
// Functions for validation
// ============================================================================

const PORTAL_VALIDATORS = {
  // Validate portal URL
  isValidPortalURL: function(url) {
    return url === 'https://internal.awsapps.com/start' || 
           url.match(/https:\/\/[a-z0-9\-]*\.awsapps\.com\/start/);
  },
  
  // Validate portal domain
  isValidPortalDomain: function(domain) {
    return domain === 'internal.awsapps.com' || 
           domain.endsWith('.awsapps.com');
  },
  
  // Check if internal domain
  isInternalDomain: function(domain) {
    return domain === 'internal.awsapps.com';
  }
};

// ============================================================================
// PORTAL CONSTANTS EXPORT
// Make constants available globally
// ============================================================================

if (typeof window !== 'undefined') {
  window.PORTAL_URLS = PORTAL_URLS;
  window.DOMAIN_CONSTANTS = DOMAIN_CONSTANTS;
  window.PATH_CONSTANTS = PATH_CONSTANTS;
  window.PROTOCOL_CONSTANTS = PROTOCOL_CONSTANTS;
  window.PORTAL_CONFIG = PORTAL_CONFIG;
  window.PORTAL_ENDPOINTS = PORTAL_ENDPOINTS;
  window.PORTAL_FEATURES = PORTAL_FEATURES;
  window.SUPPORTED_DOMAINS = SUPPORTED_DOMAINS;
  window.SUBDOMAIN_PATTERNS = SUBDOMAIN_PATTERNS;
  window.PORTAL_DOCS = PORTAL_DOCS;
  window.PORTAL_STATUS = PORTAL_STATUS;
  window.PORTAL_HEADERS = PORTAL_HEADERS;
  window.PORTAL_TIMING = PORTAL_TIMING;
  window.PORTAL_VALIDATORS = PORTAL_VALIDATORS;
  
  // Convenience object for all constants
  window.AWS_PORTAL_CONSTANTS = {
    urls: PORTAL_URLS,
    domains: DOMAIN_CONSTANTS,
    paths: PATH_CONSTANTS,
    protocols: PROTOCOL_CONSTANTS,
    config: PORTAL_CONFIG,
    endpoints: PORTAL_ENDPOINTS,
    features: PORTAL_FEATURES,
    supportedDomains: SUPPORTED_DOMAINS,
    subdomainPatterns: SUBDOMAIN_PATTERNS,
    docs: PORTAL_DOCS,
    status: PORTAL_STATUS,
    headers: PORTAL_HEADERS,
    timing: PORTAL_TIMING,
    validators: PORTAL_VALIDATORS
  };
}

// Module export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PORTAL_URLS,
    DOMAIN_CONSTANTS,
    PATH_CONSTANTS,
    PROTOCOL_CONSTANTS,
    PORTAL_CONFIG,
    PORTAL_ENDPOINTS,
    PORTAL_FEATURES,
    SUPPORTED_DOMAINS,
    SUBDOMAIN_PATTERNS,
    PORTAL_DOCS,
    PORTAL_STATUS,
    PORTAL_HEADERS,
    PORTAL_TIMING,
    PORTAL_VALIDATORS
  };
}

// Initialization logging
console.log('%c AWS Portal Constants Module Loaded', 'color: #FF9900; font-weight: bold;');
console.log('Primary Portal: https://internal.awsapps.com/start');
console.log('Access constants via: window.AWS_PORTAL_CONSTANTS or specific constant objects');
