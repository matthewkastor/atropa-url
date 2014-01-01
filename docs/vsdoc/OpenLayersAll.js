
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for atropa */

(function (window) {
    

    window.atropa = {
        /// <summary></summary>
        /// <field name="data" type="">Container for gobal data related to the classes and functions.</field>
        /// <field name="url" type="">Utilities for handling urls.</field>
        /// <returns type="atropa"/>
                
        supportCheck: function(className, errorMessage) {
            /// <summary>Checks whether this class has been marked as unsupported and throws an 
            ///  error if it has.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="errorMessage" type="String">Optional. A custom error message. Defaults to
            ///  atropa.data[className].error</param>
        }, 
        
        requires: function(className, requirementFn, errorMessage) {
            /// <summary>Pushes a requirement check into atropa.data.requirements. The test
            ///  tests whether the class is supported in this environment. Sets
            ///  atropa.data[className]&apos;s support to unsupported and error to errorMessage
            ///  if the requirementFn returns false. The requirement checks will all be run
            ///  after the library has loaded.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="requirementFn" type="Function">A function to test whether or not the class
            ///  is supported in this environment. If supported, returns true otherwise
            ///  return false.</param>
            /// <param name="errorMessage" type="String">The error message to use when this class or its
            ///  methods are called in unsupported environments. Defaults to:
            ///  &apos;The atropa.&apos; + className + &apos; class is unsupported in this environment.&apos;;</param>
        }
        
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
/* vsdoc for atropa.data */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.data = {
        /// <summary></summary>
        /// <returns type="atropa.data"/>
                
    };

    var $x = window.atropa.data;
    $x.__namespace = "true";
    $x.__typeName = "atropa.data";
})(this);

  

  
/* vsdoc for atropa.url */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.url = {
        /// <summary></summary>
        /// <returns type="atropa.url"/>
                
        getFilename: function(url) {
            /// <summary>Gets the filename portion of a url</summary>
            /// <param name="url" type="String">The url.</param>
            /// <returns type="String">Returns everything after the last / in the url.</returns>
        }
        
    };

    var $x = window.atropa.url;
    $x.__namespace = "true";
    $x.__typeName = "atropa.url";
})(this);

  

