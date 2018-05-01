<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication2._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <script src="Scripts/Views/Default.js"></script>

    <div style="margin-top: 10px;">

        <asp:Label runat="server">First Name</asp:Label>
        <input type="text" id="tbFirst" />

        <asp:Label runat="server">Last Name</asp:Label>
        <input type="text" id="tbLast" />

        <br />
        <br />

        <asp:Label runat="server">Email</asp:Label>
        <input type="text" id="tbEmail" />

        <br />
        <br />

        <input type="button" id="bGetData" value="Get Data" />
        <input type="button" id="bSave" value="Save Data" />
        <br />
        <br />

        <div id="lblComplete"></div>
    </div>
</asp:Content>
