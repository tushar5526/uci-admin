export var UciData;
(function (UciData) {
    var IPageName;
    (function (IPageName) {
        IPageName["HOME"] = "uci-admin";
        IPageName["LIB_ENTRY"] = "lib-entry";
    })(IPageName = UciData.IPageName || (UciData.IPageName = {}));
})(UciData || (UciData = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvdWNpLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sS0FBVyxPQUFPLENBdUV2QjtBQXZFRCxXQUFpQixPQUFPO0lBbUV0QixJQUFZLFNBR1g7SUFIRCxXQUFZLFNBQVM7UUFDbkIsK0JBQWtCLENBQUE7UUFDbEIsb0NBQXVCLENBQUE7SUFDekIsQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCO0FBQ0gsQ0FBQyxFQXZFZ0IsT0FBTyxLQUFQLE9BQU8sUUF1RXZCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG5hbWVzcGFjZSBVY2lEYXRhIHtcblxuICBleHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcbiAgICB1aWQ6IG51bWJlclxuICAgIHVzZXJuYW1lOiBzdHJpbmdcbiAgICBmdWxsbmFtZT86IHN0cmluZ1xuICAgIHVzZXJzbHVnOiBzdHJpbmdcbiAgICByZXB1dGF0aW9uOiBudW1iZXJcbiAgICBwb3N0Y291bnQ6IG51bWJlclxuICAgIHRvcGljY291bnQ/OiBudW1iZXJcbiAgICBwaWN0dXJlPzogc3RyaW5nIHwgbnVsbFxuICAgIHNpZ25hdHVyZT86IHN0cmluZyB8IG51bGxcbiAgICBiYW5uZWQ6IG51bWJlclxuICAgICdiYW5uZWQ6ZXhwaXJlJz86IG51bWJlclxuICAgIHN0YXR1czogc3RyaW5nXG4gICAgbGFzdG9ubGluZT86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWRcbiAgICBncm91cFRpdGxlPzogc3RyaW5nXG4gICAgZ3JvdXBUaXRsZUFycmF5Pzogc3RyaW5nW11cbiAgICAnaWNvbjp0ZXh0Jz86IHN0cmluZ1xuICAgICdpY29uOmJnQ29sb3InPzogc3RyaW5nXG4gICAgbGFzdG9ubGluZUlTTz86IHN0cmluZ1xuICAgIGJhbm5lZF91bnRpbD86IG51bWJlciB8IGJvb2xlYW5cbiAgICBiYW5uZWRfdW50aWxfcmVhZGFibGU/OiBzdHJpbmdcbiAgICBzZWxlY3RlZEdyb3Vwcz86IGFueVtdXG4gICAgY3VzdG9tX3Byb2ZpbGVfaW5mbz86IGFueVtdXG4gIH1cbiAgXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVByb2ZpbGUge1xuICAgIHVpZDogbnVtYmVyXG4gICAgdXNlcm5hbWU6IHN0cmluZ1xuICAgIHVzZXJzbHVnOiBzdHJpbmdcbiAgICBlbWFpbDogc3RyaW5nXG4gICAgJ2VtYWlsOmNvbmZpcm1lZCc6IG51bWJlclxuICAgIGpvaW5kYXRlOiBudW1iZXJcbiAgICBsYXN0b25saW5lOiBudW1iZXJcbiAgICBwaWN0dXJlOiBzdHJpbmdcbiAgICBmdWxsbmFtZTogc3RyaW5nXG4gICAgbG9jYXRpb246IHN0cmluZ1xuICAgIGJpcnRoZGF5OiBzdHJpbmdcbiAgICB3ZWJzaXRlOiBzdHJpbmdcbiAgICBhYm91dG1lOiBzdHJpbmdcbiAgICBzaWduYXR1cmU6IHN0cmluZ1xuICAgIHVwbG9hZGVkcGljdHVyZTogc3RyaW5nXG4gICAgcHJvZmlsZXZpZXdzOiBudW1iZXJcbiAgICByZXB1dGF0aW9uOiBudW1iZXJcbiAgICBwb3N0Y291bnQ6IG51bWJlclxuICAgIHRvcGljY291bnQ6IG51bWJlclxuICAgIGxhc3Rwb3N0dGltZTogbnVtYmVyXG4gICAgYmFubmVkOiBudW1iZXJcbiAgICAnYmFubmVkOmV4cGlyZSc6IG51bWJlclxuICAgIHN0YXR1czogc3RyaW5nXG4gICAgZmxhZ3M6IG51bWJlclxuICAgIGZvbGxvd2VyQ291bnQ6IG51bWJlclxuICAgIGZvbGxvd2luZ0NvdW50OiBudW1iZXJcbiAgICAnY292ZXI6dXJsJzogc3RyaW5nXG4gICAgJ2NvdmVyOnBvc2l0aW9uJzogc3RyaW5nXG4gICAgZ3JvdXBUaXRsZTogc3RyaW5nXG4gICAgZ3JvdXBUaXRsZUFycmF5OiBbXVxuICAgIGpvaW5kYXRlSVNPOiBzdHJpbmdcbiAgICBsYXN0b25saW5lSVNPOiBzdHJpbmdcbiAgICBpc0Jsb2NrZWQ6IHRydWVcbiAgICBibG9ja3NDb3VudDogbnVtYmVyXG4gICAgY2FuRWRpdDogdHJ1ZVxuICAgIGNhbkJhbjogdHJ1ZVxuICAgIHRpdGxlOiBzdHJpbmdcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIElQYWdlTmFtZSB7XG4gICAgSE9NRSA9ICd1Y2ktYWRtaW4nLFxuICAgIExJQl9FTlRSWSA9ICdsaWItZW50cnknXG4gIH1cbn1cbiJdfQ==