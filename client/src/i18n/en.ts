import { TranslationMessages } from "react-admin";
import englishMessages from "ra-language-english";

const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  pos: {
    search: "Search",
    configuration: "Configuration",
    language: "Language",
    theme: {
      name: "Theme",
      light: "Light",
      dark: "Dark",
    },
    dashboard: {
      monthly_revenue: "Monthly Revenue",
      month_history: "30 Day Revenue History",
      new_orders: "New Orders",
      pending_reviews: "Pending Reviews",
      all_reviews: "See all reviews",
      new_countries: "New Countries",
      all_countries: "See all countries",
      pending_orders: "Pending Orders",
      welcome: {
        title: "Welcome to the react-admin e-commerce demo",
        subtitle:
          "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
        ra_button: "react-admin site",
        demo_button: "Source for this demo",
      },
    },
    menu: {
      countries: "Countries",
      planets: "Planets",
      universe: "Universe",
    },
  },
  resources: {
    show: {
      title: 'country "%{title}"',
    },
    form: {
      summary: "Summary",
      body: "Body",
      infos: "Infos",
      comments: "Comments",
    },
    action: {
      save_and_edit: "Save and Edit",
      save_and_add: "Save and Add",
      save_and_show: "Save and Show",
      save_with_average_note: "Save with Note",
    },
    countries: {
      name: "Country |||| Countries",
      fields: {
        commands: "Orders",
        first_seen: "First seen",
        groups: "Segments",
        last_seen: "Last seen",
        last_seen_gte: "Visited Since",
        name: "Name",
        total_spent: "Total spent",
        password: "Password",
        confirm_password: "Confirm password",
        stateAbbr: "State",
        title: "Title",
        tags: "Tags",
      },
      filters: {
        last_visited: "Last visited",
        today: "Today",
        this_week: "This week",
        last_week: "Last week",
        this_month: "This month",
        last_month: "Last month",
        earlier: "Earlier",
        has_ordered: "Has ordered",
        has_newsletter: "Has newsletter",
        group: "Segment",
      },
      fieldGroups: {
        informations: "Informations",
        affiliation: "Affiliation",
        tags: "Tags",
        key_dates: "Key dates",
        history: "History",
        password: "Password",
        change_password: "Change Password",
      },
      page: {
        delete: "Delete Customer",
      },
      errors: {
        password_mismatch:
          "The password confirmation is not the same as the password.",
      },
    },
    comment: {
      list: {
        about: "About",
      },
    },
    commands: {
      name: "Order |||| Orders",
      amount: "1 order |||| %{smart_count} orders",
      title: "Order %{reference}",
      fields: {
        basket: {
          delivery: "Delivery",
          reference: "Reference",
          quantity: "Quantity",
          sum: "Sum",
          tax_rate: "Tax Rate",
          taxes: "Tax",
          total: "Total",
          unit_price: "Unit Price",
        },
        // address: "Address",
        // customer_id: "Customer",
        // date_gte: "Passed Since",
        // date_lte: "Passed Before",
        // nb_items: "Nb Items",
        // total_gte: "Min amount",
        // status: "Status",
        // returned: "Returned",
      },
      section: {
        order: "Order",
        customer: "Customer",
        shipping_address: "Shipping Address",
        items: "Items",
        total: "Totals",
      },
    },
    invoices: {
      name: "Invoice |||| Invoices",
      fields: {
        date: "Invoice date",
      },
    },
    planets: {
      name: "Planet |||| Planets",
      fields: {
        tag_id: "Tag",
        height_gte: "Min height",
        height_lte: "Max height",
        height: "Height",
        image: "Image",
        reference: "Reference",
        thumbnail: "Thumbnail",
        width_gte: "Min width",
        width_lte: "Max width",
        width: "Width",
      },
      tabs: {
        image: "Image",
        details: "Details",
        description: "Description",
        reviews: "Reviews",
      },
      filters: {
        categories: "Categories",
        stock: "Stock",
        no_stock: "Out of stock",
        low_stock: "1 - 9 items",
        average_stock: "10 - 49 items",
        enough_stock: "50 items & more",
        sales: "Sales",
        best_sellers: "Best sellers",
        average_sellers: "Average",
        low_sellers: "Low",
        never_sold: "Never sold",
      },
    },
    categories: {
      name: "Category |||| Categories",
      fields: {
        name: "Name",
        planets: "Planets",
      },
    },
    reviews: {
      name: "Review |||| Reviews",
      amount: "1 review |||| %{smart_count} reviews",
      relative_to_poster: "Review on poster",
      detail: "Review detail",
      fields: {
        customer_id: "Customer",
        command_id: "Order",
        product_id: "Product",
        date_gte: "Posted since",
        date_lte: "Posted before",
        date: "Date",
        comment: "Comment",
        rating: "Rating",
      },
      action: {
        accept: "Accept",
        reject: "Reject",
      },
      notification: {
        approved_success: "Review approved",
        approved_error: "Error: Review not approved",
        rejected_success: "Review rejected",
        rejected_error: "Error: Review not rejected",
      },
    },
    segments: {
      name: "Segment |||| Segments",
      fields: {
        countries: "Countries",
        planets: "Planets",
        name: "Name",
      },
      data: {
        // Continents
        america: "America 🌎",
        oceania: "Oceania 🌏",
        europe: "Europe 🌍",
        africa: "Africa 🌍",
        asia: "Asia 🌏",
        // Affiliation
        United_Nations: "United Nations 🇺🇳",
        European_Union: "European Union 🇪🇺",
        NATO: "NATO",
        G7: "G7",
        G20: "G20",
      },
    },
  },
};

export default customEnglishMessages;
