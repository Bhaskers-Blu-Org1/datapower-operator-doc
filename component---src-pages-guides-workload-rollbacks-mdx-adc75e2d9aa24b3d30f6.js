(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Idvh:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var o=n("7ljp"),a=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},s=l("PageDescription"),i=l("AnchorLinks"),p=l("AnchorLink"),b={_frontmatter:c},u=a.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(u,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"PageDescription"},Object(o.b)("p",null,"The DataPowerService uses a ",Object(o.b)("a",r({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"}),"StatefulSet")," to manage the DataPower Pods it deploys. We recommend versioning your Custom Resource YAML to enable rolling back changes you’ve deployed.")),Object(o.b)(i,{mdxType:"AnchorLinks"},Object(o.b)(p,{mdxType:"AnchorLink"},"Rolling Updates"),Object(o.b)(p,{mdxType:"AnchorLink"},"Versioning your Custom Resource"),Object(o.b)(p,{mdxType:"AnchorLink"},"Rolling back a change"),Object(o.b)(p,{mdxType:"AnchorLink"},"Forced Rollback")),Object(o.b)("h2",null,"Rolling Updates"),Object(o.b)("p",null,"The default update strategy for the StatefulSet is ",Object(o.b)("inlineCode",{parentName:"p"},"RollingUpdate"),". This ensures ordered and graceful deployment and scaling of the workload when changes are made. We recommend reading through the Kubernetes documentation on ",Object(o.b)("a",r({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#rolling-updates"}),"Rolling Updates")," to understand this concept in more detail."),Object(o.b)("h2",null,"Versioning your Custom Resource"),Object(o.b)("p",null,"We recommend as a best practice that you should version control your ",Object(o.b)("inlineCode",{parentName:"p"},"DataPowerService")," Custom Resource YAMLs. Using a version control system such as ",Object(o.b)("inlineCode",{parentName:"p"},"git"),", you can easily revert changes you make to your configurations."),Object(o.b)("h2",null,"Rolling back a change"),Object(o.b)("p",null,"To roll back a given change, the process is as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Revert to the desired configuration using version control system, such as ",Object(o.b)("inlineCode",{parentName:"p"},"git"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Apply change using ",Object(o.b)("inlineCode",{parentName:"p"},"oc apply")," or ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl apply")," with desired YAML."))),Object(o.b)("h3",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"# apply change\noc apply -f my-config.yaml\n\n# check status, find that deployment is unstable\noc describe dp/my-resource\n\n# decide to roll back the change, revert yaml locally using version control\n# this can be accomplished a number a ways, some examples are:\ngit revert <last-commit>\ngit checkout <stable-tag>\n\n# apply working yaml to roll back changes\noc apply -f my-config.yaml\n")),Object(o.b)("h2",null,"Forced Rollback"),Object(o.b)("p",null,"If a change is applied to the ",Object(o.b)("inlineCode",{parentName:"p"},"DataPowerService")," Custom Resource that puts the StatefulSet into a failed state, in which a rolling update does not complete successfully, you may need to perform a ",Object(o.b)("a",r({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#forced-rollback"}),"Forced Rollback")," to recover."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-workload-rollbacks-mdx-adc75e2d9aa24b3d30f6.js.map